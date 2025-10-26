import {

  FilterIcon,
  ListIcon,
  SearchIcon,
} from "@/components/icons/Icons";
import {  demoUsers } from "@/data/DemoData";
import Pagination from "@/pages/shared/Pagination";
// import SearchBar from "@/pages/user/cronHistory/components/SearchBar";
import { TUserFilter } from "@/types/types";
import { getUserFilterInputPlaceholderText } from "@/utils/utils";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function UsersLists() {
  // hooks
  const [filterType, setFilterType] = useState<TUserFilter>("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(30);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTotalPages(30)
  }, [])
  

  //   handlers
  const handleKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  const handleFilter = () => {
    if (!inputRef?.current) return;

    console.log(inputRef.current?.value);
    toast.warn("API integration in progress");
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value as TUserFilter;
    setFilterType(selectedType);
  };
  return (
    <>
      <div className="w-full bg-white z-20 sticky top-[63px] md:top-[65px] right-0">
        {/* ===== filter and search ====== */}
        <div className="w-full flex md:pt-5 items-center flex-wrap md:justify-end gap-2 md:gap-5 mb-5">
          <div className="flex items-center gap-3 md:gap-5 ">
            <FilterIcon className="w-6 h-6" />
            <select
              title="Filter By"
              onChange={handleFilterChange}
              className="border outline-none border-slate-300 py-1.5 px-2 rounded-[5px] lg:rounded-[7px]"
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="status">Status</option>
              <option value="domain">Domain</option>
              <option value="subscription">Subscription</option>
            </select>
          </div>
          <div
            className={`w-full duration-200 overflow-hidden rounded-[5px] lg:rounded-[7px] flex max-w-[500px] border ${
              focused ? "border-slate-400" : "border-slate-300"
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
              className="cursor-pointer duration-200 w-auto h-auto  px-3 flex items-center justify-center"
            >
              <SearchIcon className="w-5 md:w-6 h-5 md:h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* ====== table heading ======= */}
      <div className="overflow-x-auto border-t border-b max-h-[500px] h-[50vh] xl:h-[60vh] lg:border border-slate-300 rounded-md">
        {/* Desktop Table */}
        <table className="w-full min-w-[750px] lg:min-w-[800px] text-left border-collapse hidden sm:table">
          <thead className="bg-slate-800 text-white sticky top-0 z-10">
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
            {demoUsers.map((user, i) => (
              <tr
                key={user._id}
                className={`border-t ${
                  i % 2 === 0 ? "" : "bg-slate-100"
                } hover:bg-slate-600 hover:text-white border-slate-300 text-sm xl:text-base`}
              >
                <td className="w-20 px-3 py-2">{i + 1}</td>
                <td className="max-w-[200px] px-3 py-2">{user.name}</td>
                <td className="max-w-[300px] px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">{user.domain}</td>
                <td className="max-w-[200px] px-3 py-2">{user.status}</td>
                <td className="max-w-[200px] px-3 py-2">
                  <button className=" underline text-blue-600">
                    {user.status === "enabled" ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ======== Mobile Stack Layout ===== */}
        <div className="sm:hidden space-y-4 p-2">
          {demoUsers.map((user, i) => (
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
                <span className="font-semibold min-w-[75px]">Email :</span>
                <span>{user.email}</span>
              </div>
              <div className="flex">
                <span className="font-semibold min-w-[75px]">Domain :</span>
                <span>{user.domain}</span>
              </div>
              <div className="flex">
                <span className="font-semibold min-w-[75px]">Status :</span>
                <span>{user.status}</span>
              </div>
              <div className="flex mt-1">
                <span className="font-semibold min-w-[75px]">Actions :</span>
                <button className={`rounded-[10px] mr-10 duration-200 text-white px-3 ${user.status === "enabled" ?'bg-red-500 hover:bg-red-600':'bg-green-500 hover:bg-green-600'}`}>
                  {user.status === "enabled" ? "Disable" : "Enable"}
                </button>
                <button className="duration-200 rounded-[10px] bg-blue-500 hover:bg-blue-600 text-white px-3">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination 
      currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       totalPages={totalPages}
          containerStyle="flex items-center justify-center gap-5"
        />
    </>
  );
}
