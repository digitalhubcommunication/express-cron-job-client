import { Link } from "react-router-dom";
import { DefaultUserIcon } from "../icons/Icons";

export default function Profile() {
  return (
    <div>
        <Link to="/settings/profile-and-password" className="inline-block w-auto h-auto p-1.5 border border-gray-400 dark:border-gray-600 rounded-full overflow-hidden">
            <DefaultUserIcon className="w-6 h-6" />
        </Link>
    </div>
  )
}
