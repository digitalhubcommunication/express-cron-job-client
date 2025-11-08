import DashboardContainer from "@/components/wrapper/DashboardContainer";
import SearchBar from "./components/SearchBar";
import { CheckIcon, XMarkIcon } from "@/components/icons/Icons";
import { useEffect, useState } from "react";
import CronTypeSwitcher from "./components/CronTypeSwitcher";
import Pagination from "@/pages/shared/Pagination";
import { useLazyGetCronLogQuery } from "@/redux/features/userAction/userActionApi";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ICronLog } from "@/types/types";

export type TCronType = "ALL" | "DEFAULT" | "MANUAL";
export type TFilterBy = "URL" | "STATUS";

export default function CronHistory() {
  const [getCronLog,{}] = useLazyGetCronLogQuery();
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<ICronLog[]>([]);
  const [cronType, setCronType] = useState<TCronType>("ALL");
  const [filterBy, setFilterBy] = useState<TFilterBy>("URL");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusCode, setStatusCode] = useState("success");
  const [domainUrl, setDomainUrl] = useState("");
  const [refetch, setRefetch] = useState(false); 
  const limit = 50;


  // requried fields
  useEffect(() => {
    const loadLog = async () => {
      !isLoading && setIsLoading(true);
      try {
        const params = new URLSearchParams({
          domainType:
            cronType === "ALL"
              ? ""
              : cronType === "DEFAULT"
              ? "default"
              : "manual",
          domainUrl,
          filterBy: filterBy === "STATUS" ? "status" : "url",
          status: statusCode === "success" ? "200" : "",
          page: currentPage.toString(),
          limit: `${limit}`,
        });

        // Build query string like: ?domainType=xyz&cronType=ALL&filterBy=URL&page=1
        const query = params.toString();
        const res = await getCronLog(query).unwrap();
        if (res.logs && res.logs?.length > 0) {
          setLogs(res.logs);
          setTotalPages(res.pages);
        } else {
          setLogs([]);
          setTotalPages(1);
        }
      } catch (error) {
        toast.error("Internal server error");
        console.log(error);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
        setRefetch(false);
      }
    };

    loadLog();
  }, [filterBy, currentPage, cronType, statusCode, domainUrl, refetch===true]);

  const startingIndex = (currentPage - 1) * limit;
  return (
    <DashboardContainer>
      <section className="mt-5 xl:mt-10">
        <h3 className="text-center">History for all Cron Job</h3>
        <div className=" w-full mt-5">
          <CronTypeSwitcher cronType={cronType} setCronType={setCronType} />
          
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
              <SearchBar
              cronType={cronType}
              setRefetch={setRefetch}
                setLogs={setLogs}
                logs={logs}
                domainUrl={domainUrl}
                setDomainUrl={setDomainUrl}
                statusCode={statusCode}
                setStatusCode={setStatusCode}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                setCurrentPage={setCurrentPage}
              />
              <div className="w-full table-shadow rounded-[10px] max-w-full overflow-x-auto max-h-[60vh] mt-10 lg:mt-0">
                <table className="relative text-[16px] md:text-1 2xl:text-[16px] min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="">
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Domain
                      </th>

                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 w-[70px] xl:w-[100px] overflow-hidden px-4 py-2 text-center font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Message
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 w-[100px] lg:w-[200px] px-4 py-2 text-center font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 w-[70px] xl:w-[100px] text-center px-4 py-2 font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Success
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 whitespace-nowrap lg:w-[180px] text-center px-4 py-2 font-medium text-gray-500 capitalize tracking-wider rounded-tr-lg"
                      >
                        Response Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {logs.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                        >
                          No cron jobs found for this user.
                        </td>
                      </tr>
                    ) : (
                      logs.map((history, index) => (
                        <tr
                          key={history._id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                            {startingIndex + index + 1}
                          </td>
                          <td className=" overflow-x-auto px-4 py-3.5 whitespace-nowrap text-blue-600 hover:underline">
                            <span>{history.domain}</span>
                          </td>
                          <td className="w-[70px] xl:w-[100px] text-center px-4 py-3.5 whitespace-nowrap">
                            {history.status === 0 ? 404 : history.status}
                          </td>
                          <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap">
                            <span>{history.message}</span>
                          </td>
                          <td className="w-[100px] capitalize lg:w-[200px] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <span>{history.domainType}</span>
                          </td>
                          <td className="w-[70px] xl:w-[100px] text-center px-4 py-1  whitespace-nowrap">
                            <span className="py-1 rounded-full flex items-center justify-center">
                              {history.status === 200 ? (
                                <CheckIcon className="text-green-600 max-w-5" />
                              ) : (
                                <XMarkIcon className="max-w-5 text-red-600" />
                              )}
                            </span>
                          </td>
                          <td className="lg:w-[180px] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <span>{history.responseTime}ms</span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {totalPages > 1 && !isLoading && logs?.length && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </section>
    </DashboardContainer>
  );
}
