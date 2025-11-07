import { Link } from "react-router-dom";
import defaultProfile from "@/assets/images/profile-avatar.jpeg";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import LoadingSpinner from "../loading/LoadingSpinner";

export default function UserProfile() {
  const { authUser, isUserLoading } = useSelector((state: RootState) => state.auth);

  if(isUserLoading || !authUser?.role )return <LoadingSpinner
        totalVisuals={3}
        containerClass="w-3 md:w-4 h-3 2xl:h-4"
      />

  return (
    <div>
        <Link to={`/${authUser.role === "admin" ? "admin":"settings"}/profile-and-password`} className="inline-block w-auto h-auto border border-gray-400 dark:border-gray-600 rounded-full overflow-hidden">
        <img src={defaultProfile} className="w-7 min-w-7 min-h-7 h-7" alt="Default profile" />
        </Link>
    </div>
  )
}
