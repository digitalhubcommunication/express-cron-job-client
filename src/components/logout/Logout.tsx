import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { SignOutIcon } from '../icons/Icons';
import { toast } from 'react-toastify';

export default function Logout() {
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const hide = EXPAND === "MINIMIZE_SIDEBAR";

  const handleClick = ()=>{
  toast.warn("API integration in progress")
  }
  return (
    <button onClick={handleClick} className={`text-red-600 px-4 pl-[22px] md:px-5 md:pl-[26px] lg:px-6 lg:pl-[30px] duration-300 flex items-center flex-nowrap w-full gap-4 hover:bg-slate-100 py-2.5 `}>
      <SignOutIcon />
      <span
        className={`ecj_fs-md duration-700 whitespace-nowrap  ${
          hide ? "lg:opacity-0 overflow-hidden" : "opacity-100"
        }`}
      >
        Logout
      </span>
    </button>
  );
};