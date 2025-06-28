import { useDispatch } from "react-redux";
import { SET_EXPAND, updatePreventScrolling } from "@/redux/features/rootModyfier/Modyfier";
import SiteLogo from "../logo/SiteLogo";
import { HambergerMenuIcon } from "../icons/Icons";

export default function Navbar() {
  const dispatch = useDispatch();
  // handlers
  const handleClick = () => {
    dispatch(SET_EXPAND("OPEN_PRIVATE_SIDEBAR_MENU"));
    dispatch(updatePreventScrolling(true));
  };
  return (
    <div className="w-full  wt_header py-2 flex justify-between items-center px-4 md:px-5 lg:hidden fixed top-0 left-0 z-[99]">
      <SiteLogo />
      <button onClick={handleClick}>
        <HambergerMenuIcon className="w-10 h-6" />
      </button>
    </div>
  );
}

