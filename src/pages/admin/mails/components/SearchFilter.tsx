
import { FilterIcon, SearchIcon } from "@/components/icons/Icons";
import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";

type Props = {
  filterMail: string;
  setFilterMail: Dispatch<SetStateAction<string>>;
};


export default function SearchFilter({
  filterMail,
  setFilterMail
}: Props) {
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
    setFilterMail(inputRef.current?.value);
  };
  return (
    <div className="w-full h-20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-5 pb-5">
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
              defaultValue={filterMail}
              id="url_search_input"
              placeholder="Enter user mail"
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
  );
}
