import PageLoading from "@/components/loading/PageLoading";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import {
  useDeleteGuestUserMutation,
  useLazyGetGuestUsersQuery,
} from "@/redux/features/adminActions/adminActions";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { IGuestUser } from "@/types/types";
import { toast } from "react-toastify";
import {
  FilterIcon,
  ListIcon,
  SearchIcon,
  SpinnerIcon,
} from "@/components/icons/Icons";
import { buildUserFilterQuery } from "@/utils/utils";
import Pagination from "@/pages/shared/Pagination";
import Buttons from "./components/Buttons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function Guests() {
  const [loadUsers, { isLoading }] = useLazyGetGuestUsersQuery();
  const [deleteUser, { isLoading: deleting }] = useDeleteGuestUserMutation();
  const [users, setUsers] = useState<IGuestUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [limit, setLimit] = useState(20);

  // handlers
  const handleKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  const handleFilter = () => {
    // if (!inputRef?.current || !inputRef?.current?.value) return;
    try {
      loadData();
    } catch (error) {
      console.error("Error filtering:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const agree = confirm("Are you sure! You want to delete this guest user ?")
    if (!agree) return;

    setDeletingId(id);
    try {
      const res = await deleteUser(id).unwrap();
      if (res.success) {
        toast.success(res.message);
        loadData();
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.error("Error deleting:", error);
    }
  };

  const loadData = async () => {
    try {
      const query = buildUserFilterQuery(
        "email",
        inputRef.current?.value || "",
        currentPage,
        limit
      );

      const result = await loadUsers(query).unwrap();
      console.log("Guest users:", result);
      if (result?.success) {
        setUsers(result.data || []);
        setTotalPages(result.totalPages);
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentPage, limit]);


  // starting page
  const startingIndex = (currentPage - 1) * limit + 1;
  return (
    <DashboardContainer
      className={`pt-10 lg:pt-[110px] ${isLoading && "pointer-events-none"}`}
    >
      <section className="section-pb">
        <div className="w-full mb-5">
          <h3 className="text-center">User lists</h3>
        </div>
        <div className="w-full bg-white z-20">
          {/* ===== filter and search ====== */}
          <div className="w-full md:pt-5 mb-5">
            {/* ====== actions ====== */}
            <div className="grow flex items-center flex-wrap md:justify-start gap-2 md:gap-5">
              <Buttons loadData={loadData} />
            </div>
            <div className="w-full flex items-center flex-wrap md:justify-end gap-2 md:gap-5">
              <div className="flex items-center gap-3 md:gap-5 ">
                <FilterIcon className="w-6 h-6" />
                <span>Email</span>
              </div>
              <div
                className={`w-full duration-200 overflow-hidden rounded-[5px] lg:rounded-[7px] flex max-w-[500px] border ${focused ? "border-slate-400" : "border-slate-300"
                  }  `}
              >
                <input
                  ref={inputRef}
                  onKeyUp={handleKeyChange}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  id="guestEmailFilterInput"
                  placeholder="Enter email"
                  type="email"
                  className=" outline-none  py-1.5 lg:text-[18px] px-4 w-full"
                />
                <button
                  onClick={handleFilter}
                  disabled={isLoading}
                  className="cursor-pointer duration-200 w-auto h-auto  px-3 flex items-center justify-center"
                >
                  {isLoading ? (
                    <SpinnerIcon className="w-5 md:w-6 h-5 md:h-6" />
                  ) : (
                    <SearchIcon className="w-5 md:w-6 h-5 md:h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <PageLoading />
        ) : users.length > 0 ? (
          <>
            {/* ====== table heading ======= */}
            <div className="overflow-x-scroll border-t border-b lg:border border-slate-300 rounded-md">
              {/* Desktop Table */}
              <table className="w-full min-w-[1020px] text-left border-collapse table">
                <thead className="bg-slate-800 text-white">
                  <tr className="text-sm xl:text-base text-white">
                    <th className="w-20 px-3 py-2">
                      <ListIcon className="w-5" />
                    </th>
                    <th className="max-w-[300px] px-3 py-2">Email</th>
                    <th className="px-3 py-2">Domain</th>
                    <th className="max-w-[300px] px-3 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr
                      title="See details"
                      key={user._id}
                      className={`cursor-pointer border-t ${i % 2 === 0
                        ? "hover:bg-slate-100/50"
                        : "bg-slate-100 hover:bg-slate-200/50"
                        } border-slate-300 text-sm xl:text-base`}
                    >
                      <td className="w-20 px-3 py-2">{startingIndex + i}</td>
                      <td className="max-w-[300px] px-3 py-2">{user.email}</td>
                      <td className="px-3 py-2">{user.domain}</td>
                      <td className="max-w-[200px] px-3 py-2 text-center">
                        {deletingId === user._id && deleting ? (
                          <LoadingSpinner
                            totalVisuals={3}
                            containerClass="w-3 md:w-4 h-3 2xl:h-4"
                          />
                        ) : (
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="btn btn-danger !px-5 lg:!px-10 !py-1"
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="w-full mt-10 lg:mt-20 min-h-32 flex items-center justify-center">
            <p>No user found</p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          containerStyle="flex items-center justify-center gap-5"
          limit={limit}
          setLimit={setLimit}
        />
      </section>
    </DashboardContainer>
  );
}
