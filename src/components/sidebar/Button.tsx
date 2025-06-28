import { useDispatch } from "react-redux";
import { XMarkIcon } from "../icons/Icons";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";

export const SidebarCloseButton = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(SET_EXPAND(null))} className="lg:hidden">
      <XMarkIcon className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
};
