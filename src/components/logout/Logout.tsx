import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SignOutIcon } from "../icons/Icons";
import { toast } from "react-toastify";
import { useLogoutMutation } from "@/redux/features/auth/AuthApiSlice";
import LoadingSpinner from "../loading/LoadingSpinner";
import { setAuthUser } from "@/redux/features/auth/AuthSlice";
import { deleteUserInfo } from "@/utils/token";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { EXPAND } = useSelector((state: RootState) => state.sidebarToggler);
  const hide = EXPAND === "MINIMIZE_SIDEBAR";
  const [logout, { isLoading }] = useLogoutMutation();

  const handleClick = async () => {
    try {
      await logout({}).unwrap();
    } catch (error) {
      console.log(error);
    }
    finally{
      navigate("/", {replace:true})
      dispatch(setAuthUser(null));
      deleteUserInfo();
      toast.success("Logged out");
    }
  };
  if (isLoading)
    return (
      <LoadingSpinner
        className="min-h-10 mx-auto"
        containerClass="w-4 md:w-5 h-4 2xl:h-5"
        squareClasses={["bg-black", "bg-black", "bg-black "]}
      />
    );

  return (
    <button
      onClick={handleClick}
      className={`text-red-600 px-4 pl-[22px] md:px-5 md:pl-[26px] lg:px-6 lg:pl-[30px] duration-300 flex items-center flex-nowrap w-full gap-4 hover:bg-slate-100 py-2.5 `}
    >
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
}
