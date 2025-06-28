import {
  SET_EXPAND,
  updatePreventScrolling,
} from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SiteLogo from "./logo/SiteLogo";
import { XMarkIcon } from "./Icons";
import { Button } from "./Button";

export default function PrivateSidebar() {
  const dispatch = useDispatch();
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const minimizeSidebar = useSelector((state: RootState) => state.sidebarToggler.EXPAND);
  // import { removeAccessToken } from "@/utils/auth";

  //   hanlders
  const handleClose = () => {
    dispatch(SET_EXPAND(null));
    dispatch(updatePreventScrolling(false));
  };

  const handleLogout = async () => {
    // clear cookies and redirect to home page
    try {
      // const res = await fetch("/api/auth/logout");
      // const result = await res.json();
      // if (result.success) {
      //   // removeAccessToken();
      //   // router.replace("/");
      // } else {
      //   throw new Error("Something went wrong");
      // }
    } catch (error) {
      toast.warn("Something went wrong");
      console.log(error);
    }
  };
console.log(minimizeSidebar);
  const active = EXPAND === "OPEN_PRIVATE_SIDEBAR_MENU";
  return (
    <aside
      className={`w-full bg-slate-200 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 
         overflow-hidden h-screen fixed lg:sticky top-0 
        ${
          active ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } duration-500 z-[999] 
        ${minimizeSidebar=== "MINIMIZE_SIDEBAR" ? "max-w-[40px] overflow-hidden" : "max-w-[400px] lg:max-w-[350px]"}`}
    >
      <div className="w-full bg-black flex flex-col h-full">
        <div className="w-full py-2 px-5 flex items-center justify-between">
          <SiteLogo />
          <button className="lg:hidden" onClick={handleClose}>
            <XMarkIcon />
          </button>
        </div>
        <div className="w-full flex flex-col items-start mt-2 grow border-t border-slate-300 dark:border-slate-700">
          <div className="w-full grow flex items-center justify-center pr-5 border-t border-slate-300 dark:border-slate-700">
            <Button label="Logout" className="!py-2.5" cb={handleLogout} />
          </div>
        </div>
      </div>
    </aside>
  );
}
