import { EXPAND_SIDEBAR } from "@/redux/features/sidebar/SidebarToggler";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarToggler() {
  const dispatch = useDispatch();
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const active = EXPAND === "MINIMIZE_SIDEBAR";
  return (
    <div
      className="relative z-50 flex border border-red-400 w-6 cursor-pointer flex-col items-center justify-center space-y-1"
      onClick={() =>
        dispatch(EXPAND_SIDEBAR(!active ? "MINIMIZE_SIDEBAR" : null))
      }
    >
      <div
        className={`h-0.5 w-6 bg-black dark:bg-white transition-all duration-200 ease-in-out ${
          active ? "translate-y-1.5 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`h-0.5 w-6 bg-black dark:bg-white transition-all duration-200 ease-in-out ${
          active ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-0.5 w-6 bg-black dark:bg-white transition-all duration-200 ease-in-out ${
          active ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      ></div>
    </div>
  );
}
