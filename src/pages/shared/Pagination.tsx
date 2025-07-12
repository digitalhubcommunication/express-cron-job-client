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

  const getPageRange = () => {
    const range: (number | string)[] = [];
    const sideCount = Math.floor((maxVisiblePages - 3) / 2);
    const left = Math.max(2, currentPage - sideCount);
    const right = Math.min(totalPages - 1, currentPage + sideCount);

    if (left > 2) {
      range.push(1, "...");
    } else {
      for (let i = 1; i < left; i++) {
        range.push(i);
      }
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) {
      range.push("...", totalPages);
    } else {
      for (let i = right + 1; i <= totalPages; i++) {
        range.push(i);
      }
    }

    return range;
  };

  const pageRange = getPageRange();

  return (
    <div className={` ${containerStyle}`}>
      <div className="flex justify-center gap-1 mt-4 flex-wrap">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`p-1 mr-2 bg-slate-200 rounded disabled:opacity-50 ${buttonStyle}`}
        >
         <AngleLeftIcon />
        </button>

        {pageRange.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-1 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrentPage(Number(page))}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200"
              } ${buttonStyle}`}
            >
              {page}
            </button>
          )
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`p-1 ml-2 bg-slate-200 rounded disabled:opacity-50 ${buttonStyle}`}
        >
         <AngleRightIcon />
        </button>
      </div>
    </div>
  );
}
