import { FilterIcon, SearchIcon } from "@/components/icons/Icons";
import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { TFilterBy } from "../CronHistory";
import ClearCronLogBtn from "./ClearCronLogBtn";
import { ICronLog } from "@/types/types";

type Props = {
  filterBy: TFilterBy;
  setFilterBy: Dispatch<SetStateAction<TFilterBy>>;
  statusCode: string;
  setStatusCode: Dispatch<SetStateAction<string>>;
  domainUrl: string;
  setDomainUrl: Dispatch<SetStateAction<string>>;
  setCurrentPage:Dispatch<SetStateAction<number>>;
  setLogs:Dispatch<SetStateAction<ICronLog[]>>;
};

export default function SearchBar({
  filterBy,
  setFilterBy,
  statusCode,
  setStatusCode,
  domainUrl,
  setDomainUrl,
  setCurrentPage,
  setLogs
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
    setDomainUrl(inputRef.current?.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value as TFilterBy);
  };

  const handleStatusCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusCode(e.target.value as string);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between gap-5">
      <ClearCronLogBtn setLogs={setLogs}  setCurrentPage={setCurrentPage} />
      <div className="w-full h-20 flex items-center justify-end gap-5">
        <FilterIcon className="w-5 md:w-6 h-5 md:h-6" />
        <select
          className="border max-w-[100px] focus:border-slate-400 border-slate-300 outline-none rounded-[5px] lg:rounded-[7px] py-1.5 lg:text-[18px] px-2 w-auto"
          value={filterBy}
          onChange={handleChange}
        >
          <option value="URL">URL</option>
          <option value="STATUS">Status</option>
        </select>

        {filterBy === "URL" ? (
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
              defaultValue={domainUrl}
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
        ) : (
          <select
            className="border focus:border-slate-400 border-slate-300 outline-none rounded-[5px] lg:rounded-[7px] py-1.5 lg:text-[18px] px-2 w-auto"
            value={statusCode}
            onChange={handleStatusCode}
          >
            <option value="success">Success</option>
            <option value="fail">Failed</option>
          </select>
        )}
      </div>
    </div>
  );
}
