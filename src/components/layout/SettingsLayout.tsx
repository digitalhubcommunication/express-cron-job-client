import AuthNavbar from "../authNavbar/AuthNavbar";
import NavlinkSidebar from "../sidebar/NavlinkSidebar";

export default function SettingsLayout() {
  return (
    <div className="w-full grow flex">
      <NavlinkSidebar />
      <div className="w-full grow flex flex-col relative">
        <AuthNavbar />
        {/* Content goes here */}
        <h4 className="text-center text-2xl font-bold">Settings Page</h4>
      </div>
    </div>
  );
}
