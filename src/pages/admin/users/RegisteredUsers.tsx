import PageLoading from "@/components/loading/PageLoading";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { useLazyGetUsersQuery } from "@/redux/features/adminActions/adminActions";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { IUser, TUserFilter } from "@/types/types";
import { toast } from "react-toastify";
import {
  FilterIcon,
  ListIcon,
  SearchIcon,
  SpinnerIcon,
} from "@/components/icons/Icons";
import {
  buildUserFilterQuery,
  getUserFilterInputPlaceholderText,
} from "@/utils/utils";
import Pagination from "@/pages/shared/Pagination";
import { useLocation, useNavigate } from "react-router";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function RegisteredUsers() {
  const query = useQuery();
  const expired = query.get("expired");

  const [loadUsers] = useLazyGetUsersQuery();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filterType, setFilterType] = useState<TUserFilter>("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(1);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  // handlers
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value as TUserFilter;
    setFilterType(selectedType);
  };

  const handleKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  const handleFilter = () => {
    if (!inputRef?.current || !inputRef?.current?.value) return;
    try {
      setLoading(true);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      let query = buildUserFilterQuery(
        filterType,
        inputRef.current?.value || "",
        currentPage,
        limit
      );

      if (expired) {
        query += `&expired=${expired}`;
      }

      const result = await loadUsers(query).unwrap();
      if (result?.success) {
        setUsers(result.users || []);
        setTotalPages(result.totalPages);
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // navigate to user details page
  const navigate = useNavigate();
  const handleSeeDetails = (id: string) => {
    navigate(`/admin/users/${id}`);
  };

  useEffect(() => {
    loadData();
  }, [currentPage, expired, limit]);

  const indexOffset = (currentPage - 1) * limit;

  return (
    <DashboardContainer
      className={`pt-10 lg:pt-[110px] ${loading && "pointer-events-none"}`}
    >
      <section className="section-pb">
        <div className="w-full mb-5">
          <h3 className="text-center">User lists</h3>
        </div>
        <div className="w-full bg-white z-20">
          {/* ===== filter and search ====== */}
          <div className="w-full flex md:pt-5 items-center flex-wrap md:justify-end gap-2 md:gap-5 mb-5">
            <div className="flex items-center gap-3 md:gap-5 ">
              <FilterIcon className="w-6 h-6" />
              <select
                title="Filter By"
                onChange={handleFilterChange}
                className="border outline-none border-slate-300 py-1.5 px-2 rounded-[5px] lg:rounded-[7px]"
              >
                {/* <option value="name">Name</option> */}
                <option value="email">Email</option>
                <option value="status">Status</option>
                <option value="domain">Domain</option>
                {/* <option value="subscription">Subscription</option> */}
              </select>
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
                id="url_search_input"
                placeholder={getUserFilterInputPlaceholderText(filterType)}
                type="text"
                className=" outline-none  py-1.5 lg:text-[18px] px-4 w-full"
              />
              <button
                onClick={handleFilter}
                disabled={loading}
                className="cursor-pointer duration-200 w-auto h-auto  px-3 flex items-center justify-center"
              >
                {loading ? (
                  <SpinnerIcon className="w-5 md:w-6 h-5 md:h-6" />
                ) : (
                  <SearchIcon className="w-5 md:w-6 h-5 md:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {loading ? (
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
                    <th className="max-w-[200px] px-3 py-2">Name</th>
                    <th className="max-w-[300px] px-3 py-2">Email</th>
                    <th className="px-3 py-2">Domain</th>
                    <th className="max-w-[200px] px-3 py-2">Status</th>
                    <th className="max-w-[200px] px-3 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr
                      onClick={() => handleSeeDetails(user._id)}
                      title="See details"
                      key={user._id}
                      className={`cursor-pointer border-t ${i % 2 === 0
                        ? "hover:bg-slate-100/50"
                        : "bg-slate-100 hover:bg-slate-200/50"
                        } border-slate-300 text-sm xl:text-base`}
                    >
                      <td className="w-20 px-3 py-2">{indexOffset + i + 1}</td>
                      <td className="max-w-[200px] px-3 py-2">{user.name}</td>
                      <td className="max-w-[300px] px-3 py-2">{user.email}</td>
                      <td className="px-3 py-2">{user.domain}</td>
                      <td className="max-w-[200px] px-3 py-2">{user.status}</td>
                      <td className="max-w-[200px] px-3 py-2">
                        <button
                          className="py-1 underline text-blue-600"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ======== Mobile Stack Layout ===== */}
              {/* <div className="hidden space-y-4 p-2">
                {users.map((user, i) => (
                  <div
                    key={user._id}
                    className="border border-slate-300 rounded-md p-3 bg-white shadow-sm"
                  >
                    <div className="flex max-w-[200px] gap-2 ">
                      <span className="font-semibold">#</span>
                      <span>{i + 1}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold min-w-[75px]">Name :</span>
                      <span>{user.name}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold min-w-[75px]">
                        Email :
                      </span>
                      <span>{user.email}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold min-w-[75px]">
                        Domain :
                      </span>
                      <span>{user.domain}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold min-w-[75px]">
                        Status :
                      </span>
                      <span>{user.status}</span>
                    </div>
                    <div className="flex mt-1">
                      <span className="font-semibold min-w-[75px]">
                        Actions :
                      </span>
                      <button
                        onClick={() =>
                          handleDeleteUser(
                            user.status === "enabled" ? "disabled" : "enabled"
                          )
                        }
                        className={`rounded-[10px] mr-10 duration-200 text-white px-3 ${
                          user.status === "enabled"
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        {user.status === "enabled" ? "Disable" : "Enable"}
                      </button>
                      <Link
                        to={`/admin/users/${user._id}`}
                        className="duration-200 rounded-[10px] bg-blue-500 hover:bg-blue-600 text-white px-3"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div> */}
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
