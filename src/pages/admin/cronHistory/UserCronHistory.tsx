import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ICronLog } from "@/types/types";
import { useLazyGetAdminCronHistoryQuery } from "@/redux/features/adminActions/adminActions";
import CronLogs from "./CronLogs";
import DeleteCronHistory from "./DeleteCronHistory";

export type TCronType = "" | "manual" | "default";
export type TFilterBy = "title" | "status";
export type TStatusCode = "200" | "400" | "";

export default function UserCronHistory() {
  const [getCronLog] = useLazyGetAdminCronHistoryQuery();

  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<ICronLog[]>([]);
  const [cronType, setCronType] = useState<TCronType>("");

  const [filterBy, setFilterBy] = useState<TFilterBy>("status");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(50);
  const [statusCode, setStatusCode] = useState<TStatusCode>("");
  const [domainTitle, setDomainTitle] = useState("");
  const [refetch, setRefetch] = useState(false);

  // requried fields
  useEffect(() => {
    const loadLog = async () => {
      if (!isLoading) {
        setIsLoading(true);
      }

      const params: URLSearchParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: `${limit}`,
        filterBy,
      });

      if (cronType) {
        params.append("domainType", cronType);
      }

      if (cronType === "manual") {
        if (filterBy === "status" && statusCode) {
          params.append("status", statusCode);
        } else if (filterBy === "title" && domainTitle) {
          params.append("domainTitle", domainTitle);
        }
      } else {
        if (statusCode) {
          params.append("status", statusCode);
        }
      }

      try {
        // Build query string like: ?domainType=default&cronType=manual&filterBy=title&page=1
        const query = params.toString();
        console.log(query, " query");
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
  }, [
    filterBy,
    currentPage,
    cronType,
    statusCode,
    domainTitle,
    refetch === true,
    limit
  ]);
  return (
    <DashboardContainer>
      <section className="mt-5 xl:mt-10">
        <h3 className="text-center">History for all Cron Job</h3>
        <CronLogs
          cronType={cronType}
          setRefetch={setRefetch}
          setLogs={setLogs}
          logs={logs}
          domainTitle={domainTitle}
          setDomainTitle={setDomainTitle}
          statusCode={statusCode}
          setStatusCode={setStatusCode}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setCurrentPage={setCurrentPage}
          limit={limit}
          totalPages={totalPages}
          currentPage={currentPage}
          isLoading={isLoading}
          setCronType={setCronType}
          setLimit={setLimit}
          key="ALL_USERS_CRON"
        >
          {!!logs.length && cronType === "" ? (
            <DeleteCronHistory
              key="ADMIN_CRON_LOG_FILTER"
              setLogs={setLogs}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <></>
          )}
        </CronLogs>
        {/* <div className=" w-full mt-5">
          <CronTypeSwitcher
            setFilterBy={setFilterBy}
            cronType={cronType}
            setCronType={setCronType}
          />

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
                domainTitle={domainTitle}
                setDomainTitle={setDomainTitle}
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
                      {cronType === "manual" ? (
                        <th
                          scope="col"
                          className="bg-gray-50 sticky w-[25%] overflow-hidden lg:w-[20%] xl:w-[10%] top-0 left-0 px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                        >
                          Title
                        </th>
                      ) : (
                        <></>
                      )}
                      <th
                        scope="col"
                        className="bg-gray-50 sticky w-[50%] lg:w-[40%] xl:w-[30%] top-0 left-0 px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                      >
                        Domain
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
                        Execution Time
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
                          {cronType === "manual" ? (
                            <td className=" overflow-x-auto px-4 py-3.5 w-[25%] overflow-hidden lg:w-[20%] xl:w-[10%] whitespace-nowrap text-blue-600 hover:underline">
                              <span>{history.title}</span>
                            </td>
                          ) : (
                            <></>
                          )}

                          <td className=" overflow-x-auto px-4 py-3.5 w-[50%] lg:w-[40%] xl:w-[30%] whitespace-nowrap text-blue-600 hover:underline">
                            <span>
                              {history?.domain || ""}
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
          {totalPages > 1 && !isLoading && logs?.length && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div> */}
      </section>
    </DashboardContainer>
  );
}
