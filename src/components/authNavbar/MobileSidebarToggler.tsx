import { useDispatch } from "react-redux";
import { HambergerMenuIcon } from "../icons/Icons";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";

export default function MobileSidebarToggler() {
    const dispatch = useDispatch();
  return (
    <button data-prevent-body-trigger onClick={()=>dispatch(SET_EXPAND("OPEN_DASHBOARD_SIDEBAR"))} className="lg:hidden">
        <HambergerMenuIcon className="min-w-6 w-6 h-6 text-black" />
    </button>
  )
}
