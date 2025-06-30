import { NavLink } from "react-router-dom";
import ExpandableLogo from "../logo/ExpandableLogo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { authUserLinks } from "@/data/NavigationLinks";
import Logout from "../logout/Logout";
import { SidebarCloseButton } from "./Button";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { TSidebarLink } from "@/types/types";

const SidebarLink = ({ link: { Icon, label, to } }: { link: TSidebarLink }) => {
  const dispatch = useDispatch();
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const hide = EXPAND === "MINIMIZE_SIDEBAR";

  // handler
  const handleClick = () => {
    dispatch(SET_EXPAND(null));
    return true;
  };

  return (
    <NavLink
      onClick={handleClick}
      className={({ isActive }) =>
        `px-4 pl-5 md:px-5 md:pl-6 lg:px-6 lg:pl-7 duration-300 flex items-center flex-nowrap w-full gap-4  py-2.5 ${
          isActive ? "bg-slate-800 text-white" : "hover:bg-slate-200 text-black"
        }`
      }
      to={to}
    >
      <Icon />
      <span
        className={`ecj_fs-md duration-700 whitespace-nowrap  ${
          hide ? "lg:opacity-0 overflow-hidden" : "opacity-100"
        }`}
      >
        {label}
      </span>
    </NavLink>
  );
};

const AuthUserLinks = () => {
  return authUserLinks.map((link) => <SidebarLink link={link} key={link.to} />);
};

export default function NavlinkSidebar() {
  const minimizeSidebar = useSelector(
    (state: RootState) => state.sidebarToggler.EXPAND
  );
  const { EXPAND } = useSelector((state: RootState) => state.modyfier);
  return (
    <aside
      className={`w-full h-screen lg:h-auto  fixed top-0 left-0 z-[9999] lg:bg-white lg:relative flex flex-col overflow-hidden duration-500 lg:duration-700 lg:border-r border-slate-300  ${
        minimizeSidebar === "MINIMIZE_SIDEBAR"
          ? "lg:max-w-[88px]"
          : "lg:max-w-[250px] 2xl:max-w-[300px]"
      } ${
        EXPAND === "OPEN_DASHBOARD_SIDEBAR"
          ? "translate-x-0"
          : "translate-x-[-100%] lg:translate-x-0"
      } `}
    >
      {/* ===== overlay ====== */}
      <div
        className={`w-full h-full lg:hidden absolute top-0 left-0 -z-10 ${
          EXPAND === "OPEN_DASHBOARD_SIDEBAR"
            ? "backdrop-blur-xs bg-slate-800/50 duration-500 opacity-100 delay-300"
            : "opacity-0"
        }`}
      ></div>
      {/* ===== overlay ====== */}
      <div
        data-prevent-body-trigger
        className="w-full sm:max-w-[350px] bg-white lg:max-w-full flex flex-col grow"
      >
        <div
          className={`w-full min-h-[63px] flex items-center justify-between lg:justify-start lg:min-h-[65px] bg-slate-100 dark:bg-slate-700 py-2.5 md:py-3 px-4 md:px-5 lg:px-6 border-b border-gray-300 dark:border-gray-700`}
        >
          <ExpandableLogo className="flex items-center" />
          <SidebarCloseButton />
        </div>

        <div className="w-full grow max-h-screen py-2.5 md:py-3">
          <div className="w-full flex flex-col items-start gap-1.5 2xl:gap-2 pb-20">
            {/* ======= authenticated user links ====== */}
            <AuthUserLinks />
            <Logout />
          </div>
        </div>
      </div>
    </aside>
  );
}
