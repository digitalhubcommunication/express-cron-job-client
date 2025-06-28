import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function TextLogo() {
    const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  return (
    <span
      className={`font-semibold text-black tracking-widest text-3xl duration-700 overflow-hidden ${
        EXPAND !== "MINIMIZE_SIDEBAR" ? "max-w-[0.1px] pl-0.1px" : "max-w-[300px]"
      }`}
    >
      EXPRESSCRONJOB
    </span>
  );
}
