import CronTypeSwitcher from "@/pages/user/cronHistory/components/CronTypeSwitcher";
import { Dispatch, SetStateAction } from "react";
import { TCronType, TFilterBy, TStatusCode } from "./UserCronHistory";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import SearchBar from "@/pages/user/cronHistory/components/SearchBar";
import { CheckIcon, XMarkIcon } from "@/components/icons/Icons";
import { formatDateForDisplay } from "@/utils/utils";
import Pagination from "@/pages/shared/Pagination";
import { ICronLog } from "@/types/types";

type Props = {
  setFilterBy: Dispatch<SetStateAction<TFilterBy>>;
  filterBy: TFilterBy;
  setCronType:Dispatch<SetStateAction<TCronType>>;
  cronType: TCronType;
  setRefetch:Dispatch<SetStateAction<boolean>>;
   isLoading:boolean;
  setLogs: Dispatch<SetStateAction<ICronLog[]>>;
  logs: ICronLog[];
  domainTitle: string;
  setDomainTitle: Dispatch<SetStateAction<string>>;
  statusCode: TStatusCode;
  setStatusCode: Dispatch<SetStateAction<TStatusCode>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  limit:number;
  currentPage:number;
  totalPages:number;
};
export default function CronLogs(props: Props) {

     const startingIndex = (props.currentPage - 1) * props.limit;
  return (
    <>
      <div className=" w-full mt-5">
        <CronTypeSwitcher
          setFilterBy={props.setFilterBy}
          cronType={props.cronType}
          setCronType={props.setCronType}
        />

        {props.isLoading ? (
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
              cronType={props.cronType}
              setRefetch={props.setRefetch}
              setLogs={props.setLogs}
              logs={props.logs}
              domainTitle={props.domainTitle}
              setDomainTitle={props.setDomainTitle}
              statusCode={props.statusCode}
              setStatusCode={props.setStatusCode}
              filterBy={props.filterBy}
              setFilterBy={props.setFilterBy}
              setCurrentPage={props.setCurrentPage}
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
                    {props.cronType === "manual" ? (
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

                    {/* <th
                            scope="col"
                            className="bg-gray-50 sticky top-0 left-0 w-[70px] xl:w-[100px] overflow-hidden px-4 py-2 text-center font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Status
                          </th> */}

                    {/* <th
                            scope="col"
                            className="bg-gray-50 sticky top-0 left-0 xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Message
                          </th> */}
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
                  {props.logs.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                      >
                        No cron jobs found for this user.
                      </td>
                    </tr>
                  ) : (
                    props.logs.map((history, index) => (
                      <tr
                        key={history._id}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                          {startingIndex + index + 1}
                        </td>
                        {props.cronType === "manual" ? (
                          <td className=" overflow-x-auto px-4 py-3.5 w-[25%] overflow-hidden lg:w-[20%] xl:w-[10%] whitespace-nowrap text-blue-600 hover:underline">
                            <span>{history.title}</span>
                          </td>
                        ) : (
                          <></>
                        )}

                        <td className=" overflow-x-auto px-4 py-3.5 w-[50%] lg:w-[40%] xl:w-[30%] whitespace-nowrap text-blue-600 hover:underline">
                          <span>{history?.domain || ""}</span>
                        </td>
                        {/* <td className="w-[70px] xl:w-[100px] text-center px-4 py-3.5 whitespace-nowrap">
                                {history.status === 0 ? 404 : history.status}
                              </td> */}
                        {/* <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap">
                                <span>{history.message}</span>
                              </td> */}
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
        {props.totalPages > 1 && !props.isLoading && props.logs?.length && (
          <Pagination
            totalPages={props.totalPages}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
          />
        )}
      </div>
    </>
  );
}
