import { FilterIcon, SearchIcon } from "@/components/icons/Icons";
import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { TFilterBy } from "../CronHistory";

type Props = {
  filterBy: TFilterBy;
  setFilterBy: Dispatch<SetStateAction<TFilterBy>>;
  statusCode:string;
  setStatusCode: Dispatch<SetStateAction<string>>;
  domainUrl:string;
  setDomainUrl:Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ filterBy, setFilterBy,statusCode,setStatusCode,domainUrl, setDomainUrl }: Props) {
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
    setDomainUrl(inputRef.current?.value)
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value as TFilterBy);
  };


  const handleStatusCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusCode(e.target.value as string);
  };

  return (
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
          <option value="200">200 Success</option>
          <option value="400">400 Bad request</option>
          <option value="403">403 Forbidden</option>
          <option value="429">429 Too many request</option>
          <option value="500">500 Internal server error</option>
          <option value="502">502 Bad gateway</option>
          <option value="503">503 Service unavailable</option>
          <option value="504">504 Gateway timeout</option>
        </select>
      )}
    </div>
  );
}
