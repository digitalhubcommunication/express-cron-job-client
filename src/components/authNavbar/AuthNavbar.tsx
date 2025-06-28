import Profile from "../profile/Profile";
import SidebarToggler from "../sidebar/SidebarToggler";
import TextLogo from "../logo/TextLogo";

export default function AuthNavbar() {
  return (
    <div className="w-full py-2.5 md:py-3 px-4 flex items-center justify-between bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <SidebarToggler />
      <TextLogo />
      <Profile />
    </div>
  );
}
