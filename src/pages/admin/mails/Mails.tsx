import LoadingSpinner from "@/components/loading/LoadingSpinner";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import Pagination from "@/pages/shared/Pagination";
import { useLazyGetAllTransactionHistoryQuery } from "@/redux/features/adminActions/adminActions";

import { IMail } from "@/types/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import SearchFilter from "./components/SearchFilter";
import { formatDateForDisplay } from "@/utils/utils";


export default function Mails() {
          const [getHistory, {}] = useLazyGetAllTransactionHistoryQuery();

      const [isLoading, setIsLoading] = useState(true);
      const [mails, setMails] = useState<IMail[]>([]);
    
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const [filterMail, setFilterMail] = useState("");
      const limit = 50;
    
      // requried fields
      useEffect(() => {
        const loadLog = async () => {
          !isLoading && setIsLoading(true);
          let params: URLSearchParams = new URLSearchParams({
            page: currentPage.toString(),
            filterMail,
            limit: `${limit}`,
          });
    
          try {
            const query = params.toString();
            const res = await getHistory(query).unwrap();
            console.log(res, " res from filter");
            if (res.transactions && res.transactions?.length > 0) {
              setMails(res.mails);
              setTotalPages(res.pages);
            } else {
              setMails([]);
              setTotalPages(1);
            }
          } catch (error) {
            toast.error("Internal server error");
            console.log(error);
            setTotalPages(1);
          } finally {
            setIsLoading(false);
          }
        };
    
        loadLog();
      }, [
        currentPage,
        filterMail
      ]);
    
  return (
     <DashboardContainer>
      <section className="mt-5 xl:mt-10">
        <h3 className="text-center">Mails From User</h3>
        <div className=" w-full mt-5">
          {isLoading ? (
            <div className="w-full min-h-[150px] flex items-center justify-center">
              <LoadingSpinner
                className="min-h-[39.81px]"
                containerClass="w-6 md:w-8 h-6 2xl:h-8"
                squareClasses={["bg-black", "bg-black", "bg-black "]}
              />
            </div>
          ) : (
            <>
              <SearchFilter
                filterMail={filterMail}
                setFilterMail={setFilterMail}
              />
              <div className="w-full table-shadow rounded-[10px] max-w-full overflow-x-auto max-h-[60vh] mt-10 lg:mt-0">
              {
                mails.map((mail, indx)=><div key={mail._id} className="flex flex-wrap gap-3 w-full shadow-xs">
                        <h6>{indx+1}</h6>
                        <p className="w-full max-w-[200px] overflow-hidden whitespace-nowrap">
                            {mail.name}
                        </p>
                        <p className="w-full max-w-[200px] overflow-hidden whitespace-nowrap">
                            {mail.email}
                        </p>
                          <p className="w-full max-w-[200px] overflow-hidden whitespace-nowrap">
                            {mail.subject}
                        </p>
                         <p className="w-full max-w-[200px] overflow-hidden whitespace-nowrap">
                            {formatDateForDisplay(mail.createdAt)}
                        </p>
                    </div>
                )
              }
              </div>
            </>
          )}
          {totalPages > 1 && !isLoading && mails?.length && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </section>
    </DashboardContainer>
  )
}
