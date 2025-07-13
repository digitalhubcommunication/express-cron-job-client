import { AngleLeftIcon, AngleRightIcon } from "@/components/icons/Icons";
import { useResponsivePageWindow } from "@/hooks/useResponsivePageRange";
import { Dispatch, SetStateAction } from "react";
type Props = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  containerStyle?: string;
  buttonStyle?: string;
};

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  buttonStyle = "",
  containerStyle = "",
}: Props) {
  const maxVisiblePages = useResponsivePageWindow();

  if (totalPages <= 1) return null;
  const getMiddlePageRange = () => {
    const range: (number | string)[] = [];
    const window = maxVisiblePages;
    const half = Math.floor(window / 2);

    if (totalPages <= window) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Adjust if at the start
    if (start === 1) {
      end = window;
    }
    // Adjust if at the end
    if (end === totalPages) {
      start = totalPages - window + 1;
    }

    if (start > 1) {
      range.push(1);
      if (start > 2) range.push("...");
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  const pageRange = getMiddlePageRange();

  return (
    <div className={` ${containerStyle}`}>
      <div className="flex justify-center text-xs md:text-sm lg:text-base mt-5 gap-1 md:gap-2 mt-4 flex-wrap">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`p-1 mr-1 md:mr-2 bg-slate-200 rounded disabled:opacity-50 ${buttonStyle}`}
        >
          <AngleLeftIcon />
        </button>

        {pageRange.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrentPage(Number(page))}
              className={`px-3 py-1 rounded ${
                currentPage === page ? "bg-blue-600 text-white" : "bg-slate-200"
              } ${buttonStyle}`}
            >
              {page}
            </button>
          )
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`p-1 ml-1 md:ml-2 bg-slate-200 rounded disabled:opacity-50 ${buttonStyle}`}
        >
          <AngleRightIcon />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <p>Jump to </p>
         <input className="border w-10 px-1 leading-0  rounded-[5px]" min={1} max={totalPages} placeholder="1" />
         <button className="bg-blue-600 text-white py-0.5 px-2 rounded-[5px]">
          GO
         </button>
      </div>
    </div>
  );
}
