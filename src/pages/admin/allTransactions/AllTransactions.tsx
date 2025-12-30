import { CopyIcon } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import Pagination from "@/pages/shared/Pagination";
import SearchBar from "@/pages/user/transactionHistory/SearchBar";
import { TStatusCode } from "@/pages/user/transactionHistory/TransactionHistory";
import { useLazyGetAllTransactionHistoryQuery } from "@/redux/features/adminActions/adminActions";
import { IPackage, IUser } from "@/types/types";
import { splitUrlIntoSpans } from "@/utils/utils";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface ITransaction {
  _id: string;
  userId: IUser;
  status: "success" | "fail" | "pending";
  amount: number;
  transactionHash: string;
  packageId: IPackage;
  createdAt: string;
  updatedAt: string;
}

export default function AllTransactions() {
  //  const { authUser } = useSelector((state: RootState) => state.auth);
  const [getHistory] = useLazyGetAllTransactionHistoryQuery();

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusCode, setStatusCode] = useState<TStatusCode>("success");
  const [transactionHash, setTransactionHash] = useState("");
  const limit = 50;

  // requried fields
  useEffect(() => {
    const loadLog = async () => {
      if (!isLoading) {
        setIsLoading(true);
      }
      const params: URLSearchParams = new URLSearchParams({
        page: currentPage.toString(),
        transactionHash,
        status: statusCode,
        limit: `${limit}`,
      });

      try {
        const query = params.toString();
        const res = await getHistory(query).unwrap();
        console.log(res, ' res')
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
  }, [currentPage, statusCode, transactionHash]);

  // handler
  const handleCopy = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      toast.success("Copy successfully");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy. Try again");
    }
  };

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
              <div className="w-full table-shadow max-w-full mt-10 lg:mt-0">
                {transactions.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                    >
                      No transactions.
                    </td>
                  </tr>
                ) : (
                  transactions.map((history, indx) => (
                    <div
                      key={history._id}
                      className="duration-200 items-start flex-col hover:bg-slate-100 cursor-pointer flex px-4 py-5 flex-wrap gap-3 w-full shadow-xs"
                    >
                      <p className="px-4 text-center py-0.5 ecj_fs-sm  bg-black rounded-full text-white ">
                        {startingIndex + indx + 1}
                      </p>
                      <p className=" w-full  overflow-hidden whitespace-nowrap">
                        <span className="font-semibold">Domain: </span>
                        {history.userId.domain}
                      </p>
                      <p className=" w-full overflow-hidden whitespace-nowrap">
                        <span className="font-semibold">Email: </span>{" "}
                        {history.userId.email}
                      </p>
                      <p className=" w-full overflow-hidden whitespace-nowrap">
                        <span className="font-semibold">Package: </span>
                        {history.packageId?.name} (${history.amount})
                      </p>
                      <p className="overflow-hidden flex gap-2 flex-wrap">
                        <span className="whitespace-nowrap font-semibold">
                          Transaction hash:{" "}
                        </span>
                        <span className="flex flex-wrap">
                          {splitUrlIntoSpans(history.transactionHash).map(
                            (ch) => (
                              <span>{ch}</span>
                            )
                          )}
                          <button
                            onClick={() => handleCopy(history.transactionHash)}
                          >
                            <CopyIcon className="ml-3 w-6 h-6 lg:w-7 lg:h-7" />
                          </button>
                        </span>{" "}
                      </p>
                      <p className="w-full max-w-[200px] overflow-hidden whitespace-nowrap">
                        {format(history.createdAt, "dd MMM, yyy hh:mm a")}
                      </p>
                    </div>
                  ))
                )}
              </div>
              {/* <table className="relative text-[16px] md:text-1 2xl:text-[16px] min-w-full divide-y divide-gray-200">
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
                        Time
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
                          No transactions.
                        </td>
                      </tr>
                    ) : (
                      transactions.map((history, index) => (
                        <tr
                         title="Click to see details"
                          onClick={() => handleNavigate(history.userId._id)}
                          key={history._id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                            {startingIndex + index + 1}
                          </td>
                          <td className=" overflow-x-auto px-4 py-3.5 w-[50%] lg:w-[40%] xl:w-[30%] whitespace-nowrap text-blue-600 hover:underline">
                            <span>{history.transactionHash}</span>
                          </td>
                          <td className="w-[100px] capitalize lg:w-[200px] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <span>${history.amount}</span>
                          </td>
                          <td className="w-[70px] xl:w-[100px] text-center px-4 py-1  whitespace-nowrap">
                            <span className="py-1 rounded-full flex items-center justify-center">
                              {history.status === "success" ? (
                                <CheckIcon className="text-green-600 max-w-5" />
                              ) : (
                                <XMarkIcon className="max-w-5 text-red-600" />
                              )}
                            </span>
                          </td>
                          <td className="lg:w-[180px] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <span>
                              {formatDateForDisplay(history.createdAt)}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table> */}
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
