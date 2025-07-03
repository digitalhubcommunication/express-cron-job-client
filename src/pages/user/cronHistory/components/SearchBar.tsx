import { FilterIcon, SearchIcon } from "@/components/icons/Icons";
import { KeyboardEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  //   handlers
  const handleKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter()
    }
  };

  const handleFilter = () => {
    if (!inputRef?.current) return;

    console.log(inputRef.current?.value);
    toast.warn("API integration in progress")
  };
  return (
    <div className="w-full h-20 flex items-center justify-end gap-5">
      <FilterIcon className="w-5 md:w-6 h-5 md:h-6" />
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
          placeholder="Enter URL"
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
  );
}
