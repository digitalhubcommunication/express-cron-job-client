import { Outlet, useNavigate } from "react-router-dom";
import AuthNavbar from "../authNavbar/AuthNavbar";
import NavlinkSidebar from "../sidebar/NavlinkSidebar";
import DashboardFooter from "../footer/DashboardFooter";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import PageLoading from "../loading/PageLoading";
import NotAuthorized from "../shared/NotAuthorized";

export default function AdminLayout() {
  // hooks
  const navigate = useNavigate();
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const [loading, setLoading] = useState(true);
  // Check if user is authenticated
  useEffect(() => {
    if (!authUser && isUserLoading) return;

    // navigate unauthorized user
    if (!authUser && !isUserLoading) {
      navigate("/login", { replace: true });
    }

    // let the user access the page.
    setLoading(false);
  }, [authUser, isUserLoading]);

  if (loading) return <PageLoading className="h-screen" />;
  if (!authUser || authUser.role !== "admin") return <NotAuthorized />;

  return (
    <div className="w-full grow flex overflow-hidden ">
      <NavlinkSidebar />
      <div className="grow overflow-hidden flex flex-col relative ">
        <AuthNavbar />
        <div className="w-full flex flex-col grow pt-[80px] bg-white overflow-y-auto max-h-screen">
          <Outlet />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
