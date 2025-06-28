import SiteLogo from "@/assets/logo/fast-crone-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router";

type Props = {
  className?: string;
};
export default function ExpandableLogo({ className = "" }: Props) {
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img src={SiteLogo} className={`h-9 2xl:h-10 w-auto`} />
      <span
        className={`ecj_fs-md text-black font-semibold tracking-widest duration-700 overflow-hidden ${
          EXPAND === "MINIMIZE_SIDEBAR"
            ? "max-w-[0.1px] pl-0.1px"
            : "max-w-[190px]"
        }`}
      >
        XPRESSCRONJOB
      </span>
    </Link>
  );
}
