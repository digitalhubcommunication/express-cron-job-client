import { AngleLeftIcon, AngleRightIcon } from "@/components/icons/Icons";
import { useResponsivePageWindow } from "@/hooks/useResponsivePageRange";
import { Dispatch, SetStateAction, useState } from "react";

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
  const [jumpPage, setJumpPage] = useState("");

  if (totalPages <= 1) return null;

  // ✅ Helper: build a compact, dynamic page range
  const getMiddlePageRange = () => {
    const range: (number | string)[] = [];
    const window = maxVisiblePages;
    const half = Math.floor(window / 2);

    if (totalPages <= window) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(2, currentPage - half);
    let end = Math.min(totalPages - 1, currentPage + half);

    // Adjust near the start
    if (currentPage <= half + 1) {
      start = 2;
      end = window;
    }

    // Adjust near the end
    if (currentPage >= totalPages - half) {
      start = totalPages - window + 1;
      end = totalPages - 1;
    }

    range.push(1);
    if (start > 2) range.push("...");

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages - 1) range.push("...");
    range.push(totalPages);

    return range;
  };

  const pageRange = getMiddlePageRange();

  // ✅ Jump to specific page
  const handleJump = () => {
    const num = Number(jumpPage);
    if (!num || num < 1 || num > totalPages) return;
    setCurrentPage(num);
    setJumpPage("");
  };

  return (
    <div className={`my-5 xl:my-10 ${containerStyle}`}>
      {/* Pagination Controls */}
      <div className="flex justify-center text-xs md:text-sm lg:text-base gap-1 md:gap-2 flex-wrap items-center">
        {/* First */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((currentPage - 10) > 1 ? currentPage - 10 : 1)}
          className={`px-2 py-1 rounded bg-slate-200 disabled:opacity-50 ${buttonStyle}`}
        >
          ⏮
        </button>

        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-2 py-1 rounded bg-slate-200 flex items-center justify-center disabled:opacity-50 ${buttonStyle}`}
        >
          <AngleLeftIcon />
        </button>

        {/* Page numbers */}
        {pageRange.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrentPage(Number(page))}
              className={`px-3 py-1 rounded transition-colors ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              } ${buttonStyle}`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-2 py-1 rounded bg-slate-200 flex items-center justify-center disabled:opacity-50 ${buttonStyle}`}
        >
          <AngleRightIcon />
        </button>

        {/* Last */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((currentPage + 10) < totalPages?currentPage + 10:totalPages)}
          className={`px-2 py-1 rounded bg-slate-200 disabled:opacity-50 ${buttonStyle}`}
        >
          ⏭
        </button>
      </div>

      {/* Jump to Page */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <p className="text-sm">Jump to</p>
        <input
          type="number"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleJump()}
          className="border border-slate-300 p-1 px-2 w-14 rounded-md text-center text-sm focus:outline-none focus:ring focus:ring-blue-200"
          min={1}
          max={totalPages}
        />
        <button
          onClick={handleJump}
          className="bg-blue-600 text-white text-sm py-1 px-3 rounded-md hover:bg-blue-700"
        >
          Go
        </button>
      </div>
    </div>
  );
}
