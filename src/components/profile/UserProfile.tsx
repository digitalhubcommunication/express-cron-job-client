import { Link } from "react-router-dom";
import defaultProfile from "@/assets/images/profile-avatar.jpeg";

export default function UserProfile() {
  return (
    <div>
        <Link to="/settings/profile-and-password" className="inline-block w-auto h-auto border border-gray-400 dark:border-gray-600 rounded-full overflow-hidden">
        <img src={defaultProfile} className="w-7 min-w-7 min-h-7 h-7" alt="Default profile" />
        </Link>
    </div>
  )
}
