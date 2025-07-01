import { Outlet } from "react-router-dom";
import AuthNavbar from "../authNavbar/AuthNavbar";
import NavlinkSidebar from "../sidebar/NavlinkSidebar";
import DashboardFooter from "../footer/DashboardFooter";

export default function SettingsLayout() {
  return (
    <div className="w-full grow flex overflow-hidden ">
      <NavlinkSidebar />
      <div className="grow overflow-hidden flex flex-col relative ">
        <AuthNavbar />
        <div className="w-full flex flex-col grow bg-white pt-[80px] overflow-y-auto max-h-screen">
          <Outlet />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
