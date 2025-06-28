import { Link } from "react-router";
import ExpandableLogo from "../logo/ExpandableLogo";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { authUserLinks } from "@/data/NavigationLinks";
import { TSidebarLink } from "@/types/Link";
import Logout from "../logout/Logout";

const SidebarLink = ({ link: { Icon, label, to } }: { link: TSidebarLink }) => {
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const hide = EXPAND === "MINIMIZE_SIDEBAR";
  return (
    <Link
      className={`px-4 pl-5 duration-300 flex items-center flex-nowrap w-full gap-4 hover:bg-slate-100 py-2.5 `}
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
    </Link>
  );
};

const AuthUserLinks = () => {
  return authUserLinks.map((link) => <SidebarLink link={link} key={link.to} />);
};

export default function NavlinkSidebar() {
  const minimizeSidebar = useSelector(
    (state: RootState) => state.sidebarToggler.EXPAND
  );
  return (
    <aside
      className={`w-full duration-700 border-r border-slate-300  ${
        minimizeSidebar === "MINIMIZE_SIDEBAR"
          ? "max-w-[72px]"
          : "lg:max-w-[360px]"
      }`}
    >
      <div className="w-full">
        <div className={`w-full py-2.5 md:py-3 px-4`}>
          <ExpandableLogo className="flex items-center" />
        </div>

        <div className="w-full mt-5 py-2.5 md:py-3 flex flex-col items-start gap-3">
          {/* ======= authenticated user links ====== */}
          <AuthUserLinks />

          <Logout />
        </div>
      </div>
    </aside>
  );
}
