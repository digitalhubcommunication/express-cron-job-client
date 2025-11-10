import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { CheckIcon, XMarkIcon } from "@/components/icons/Icons";
import { useEffect, useState } from "react";
import Pagination from "@/pages/shared/Pagination";
import { useLazyGetTransactionHistoryQuery } from "@/redux/features/userAction/userActionApi";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ICronLog } from "@/types/types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { formatDateForDisplay, removeProtocolRegex } from "@/utils/utils";
import SearchBar from "./SearchBar";

export type TFilterBy = "hash" | "status";
export type TStatusCode = "200" | "400";

export default function TransactionHistory() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [getHistory, {}] = useLazyGetTransactionHistoryQuery();

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ICronLog[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusCode, setStatusCode] = useState<TStatusCode>("200");
  const [transactionHash, setTransactionHash] = useState("");
  const limit = 50;

  // requried fields
  useEffect(() => {
    const loadLog = async () => {
      !isLoading && setIsLoading(true);
      let params: URLSearchParams = new URLSearchParams({
        page: currentPage.toString(),
        transactionHash,
        status:statusCode,
        limit: `${limit}`,
      });

      try {
        const query = params.toString();
        const res = await getHistory(query).unwrap();
        console.log(res, " res from filter");
        if (res.transactions && res.transactions?.length > 0) {
          setTransactions(res.transactions);
          setTotalPages(res.pages);
        } else {
          setTransactions([]);
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
    statusCode,
  ]);

  const startingIndex = (currentPage - 1) * limit;
  return (
    <DashboardContainer>
      <section className="mt-5 xl:mt-10">
        <h3 className="text-center">Transaction History</h3>
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
              <SearchBar
                transactionHash={transactionHash}
                setTransactionHash={setTransactionHash}
                statusCode={statusCode}
                setStatusCode={setStatusCode}
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
                        className="bg-gray-50 sticky w-[50%] lg:w-[40%] xl:w-[30%] top-0 left-0 px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Hash
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 w-[70px] xl:w-[100px] text-center px-4 py-2 font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 whitespace-nowrap lg:w-[180px] text-center px-4 py-2 font-medium text-gray-500 capitalize tracking-wider rounded-tr-lg"
                      >
                        Success
                      </th>
                      <th
                        scope="col"
                        className="bg-gray-50 sticky top-0 left-0 whitespace-nowrap lg:w-[180px] text-center px-4 py-2 font-medium text-gray-500 capitalize tracking-wider rounded-tr-lg"
                      >
                        Package
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                        >
                          No cron jobs found for this user.
                        </td>
                      </tr>
                    ) : (
                      transactions.map((history, index) => (
                        <tr
                          key={history._id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                            {startingIndex + index + 1}
                          </td>
                          <td className=" overflow-x-auto px-4 py-3.5 w-[50%] lg:w-[40%] xl:w-[30%] whitespace-nowrap text-blue-600 hover:underline">
                            <span>
                              {removeProtocolRegex(authUser?.domain || "")}
                            </span>
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
                            <span>
                              {formatDateForDisplay(
                                new Date(history.timestamp).toString()
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
          {totalPages > 1 && !isLoading && transactions?.length && (
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
