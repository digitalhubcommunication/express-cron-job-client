import SiteLogo from "@/assets/logo/fast-crone-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {
  className?: string;
};
export default function ExpandableLogo({ className = "" }: Props) {
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  return (
    <div className={`flex items-center ${className}`}>
      <img src={SiteLogo} className={`h-10 w-auto`} />
      <span
        className={`font-semibold tracking-widest text-3xl duration-700 overflow-hidden ${
          EXPAND === "MINIMIZE_SIDEBAR"
            ? "max-w-[0.1px] pl-0.1px"
            : "max-w-[300px]"
        }`}
      >
        XPRESSCRONJOB
      </span>
    </div>
  );
}
