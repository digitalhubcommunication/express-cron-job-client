import { EXPAND_SIDEBAR } from "@/redux/features/sidebar/SidebarToggler";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { LongArrowRightIcon } from "../icons/Icons";

export default function SidebarToggler() {
  const dispatch = useDispatch();
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const active = EXPAND === "MINIMIZE_SIDEBAR";
  return (
    <div
     title={`${active ? "Expand Sidebar" : "Minimize Sidebar"}`}
      className="relative z-50 flex w-6 cursor-pointer flex-col items-center justify-center"
      onClick={() =>
        dispatch(EXPAND_SIDEBAR(!active ? "MINIMIZE_SIDEBAR" : null))
      }
    >
      <div
        className={`h-0.5 w-6 bg-black dark:bg-white -mb-[1px]`}
      ></div>
      <LongArrowRightIcon className={`duration-700 text-black dark:text-white min-w-6 h-4  ${active ? "" : 'scale-x-[-1]'}`} />
      <div
        className={`h-0.5 w-6 bg-black dark:bg-white -mt-[1px]`}
      ></div>
    </div>
  );
}
