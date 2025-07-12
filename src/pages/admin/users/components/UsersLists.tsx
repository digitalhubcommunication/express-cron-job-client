import {
  CheckIcon,
  FilterIcon,
  GlobeIcon,
  ListIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
  XMarkIcon,
} from "@/components/icons/Icons";
import { cronHistories, demoUsers } from "@/data/DemoData";
import SearchBar from "@/pages/user/cronHistory/components/SearchBar";
import { TUserFilter } from "@/types/types";
import { getUserFilterInputPlaceholderText } from "@/utils/utils";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function UsersLists() {
  // hooks
  const [filterType, setFilterType] = useState<TUserFilter>("name");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      <div className="w-full bg-white sticky top-[63px] md:top-[65px] right-0">
        {/* ===== filter and search ====== */}
        <div className="w-full flex pt-5 items-center flex-wrap md:justify-end gap-5 mb-5">
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

        {/* ====== table heading ======= */}
        <div className="w-full flex border border-slate-300 py-1 items-center justify-between px-3">
          <span className="w-20">
            <ListIcon className="w-5" />
          </span>
          <span className="max-w-[200px] grow">Name</span>
          <span className="grow max-w-[300px]">Email</span>
          <span className="grow bg-red-200">Domain</span>
          <span className="grow max-w-[200px]">Status</span>
          <span className="grow max-w-[200px]">Action</span>
        </div>
      </div>
      {demoUsers.map((user, i) => (
        <div
          key={user._id}
          className="w-full flex items-center justify-between border border-slate-300 border-t-0 py-1.5 px-3"
        >
          <span className="w-20">{i + 1}</span>
          <span className="max-w-[200px] bg-blue-200 grow">{user.name}</span>
          <span className="grow max-w-[300px]">{user.email}</span>
          <span className="grow bg-red-200">{user.domain}</span>
          <span className="grow max-w-[200px] ">{user.status}</span>
          <span className="grow max-w-[200px] ">
            <button>{user.status === "enabled" ? "Disable" : "Enable"}</button>
          </span>
        </div>
      ))}
    </>
  );
}
