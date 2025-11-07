import {

  FilterIcon,
  ListIcon,
  SearchIcon,
} from "@/components/icons/Icons";
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
     
    </>
  );
}
