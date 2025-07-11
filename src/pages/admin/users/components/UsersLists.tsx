import {
  CheckIcon,
  FilterIcon,
  SearchIcon,
  XMarkIcon,
} from "@/components/icons/Icons";
import { cronHistories } from "@/data/DemoData";
import SearchBar from "@/pages/user/cronHistory/components/SearchBar";
import { TUserFilter } from "@/types/types";
import { getUserFilterInputPlaceholderText } from "@/utils/utils";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function UsersLists() {

  // hooks
  const [filterType, setFilterType] = useState<TUserFilter>("name")
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

  const handleFilterChange = (e:ChangeEvent<HTMLSelectElement>)=>{
    const selectedType = e.target.value as TUserFilter
    setFilterType(selectedType)
  }
  return (
    <>
      <div className="w-full bg-white border sticky top-[63px] md:top-[65px] right-0">
        {/* ===== filter and search ====== */}
        <div className="w-full flex pt-5 items-center flex-wrap md:justify-end gap-5 mb-5">
          <div className="flex items-center gap-3 md:gap-5 ">
            <FilterIcon className="w-6 h-6" />
            <select title="Filter By" onChange={handleFilterChange} className="border outline-none border-slate-300 py-1.5 px-2 rounded-[5px] lg:rounded-[7px]">
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
        <div className="w-full flex mt-5 h-20 bg-red-200 ">
                <span>#</span>
                <span>Name</span>
                <span>Email</span>
                <span>Domain</span>
                <span>Manual Domain</span>
                <span>Status</span>
                <span>Package</span>
                <span>Validity</span>
                <span>Action</span>
        </div>
      </div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
      <div className="w-full h-20 bg-slate-100 border my-5"></div>
    </>
  );
}
