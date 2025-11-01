import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import { cronHistories } from "@/data/DemoData";
import { CheckIcon, XMarkIcon } from "@/components/icons/Icons";
import { useState } from "react";
import CronTypeSwitcher from "./components/CronTypeSwitcher";

export type TCronType = "ALL"| "DEFAULT"|"MANUAL";
export type TFilterBy = "URL" | "STATUS";

export default function CronHistory() {
  const { defaultDomains } = useSelector((state: RootState) => state.auth);
  if (!defaultDomains) return <InvalidUser message="Invalid User" />;
  const [cronType, setCronType] = useState<TCronType>("ALL")
  const [filterBy, setFilterBy] = useState<TFilterBy>("URL")
  const [currentPage, setCurrentPage] = useState(1);
  const [logPerPage, setLogPerPage] = useState(20);


  return (
    <DashboardContainer>
      <section className="mt-5 xl:mt-10">
        <h3 className="text-center">History for all Cron Job</h3>
        <div className=" w-full mt-5">
          <CronTypeSwitcher cronType={cronType} setCronType={setCronType} />
          <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
          <div className="w-full table-shadow rounded-[10px] max-w-full overflow-x-auto max-h-[60vh]">
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
                {cronHistories.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                    >
                      No cron jobs found for this user.
                    </td>
                  </tr>
                ) : (
                  cronHistories.map((history, index) => (
                    <tr
                      key={history._id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className=" overflow-x-auto px-4 py-3.5 whitespace-nowrap text-blue-600 hover:underline">
                        <span>{history.domain}</span>
                      </td>
                      <td className="w-[70px] xl:w-[100px] text-center px-4 py-3.5 whitespace-nowrap">
                        {history.status}
                      </td>
                      <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap">
                        <span>{history.message}</span>
                      </td>
                      <td className="w-[100px] lg:w-[200px] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                        <span>{history.type}</span>
                      </td>
                      <td className="w-[70px] xl:w-[100px] text-center px-4 py-1  whitespace-nowrap">
                        <span className="py-1 rounded-full flex items-center justify-center">
                          {history.success ? (
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
        </div>
      </section>
    </DashboardContainer>
  );
}
