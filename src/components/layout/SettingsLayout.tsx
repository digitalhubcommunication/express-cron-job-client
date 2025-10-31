import { Outlet, useNavigate } from "react-router-dom";
import AuthNavbar from "../authNavbar/AuthNavbar";
import NavlinkSidebar from "../sidebar/NavlinkSidebar";
import DashboardFooter from "../footer/DashboardFooter";
import { useEffect, useState } from "react"; 
import PageLoading from "../loading/PageLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function SettingsLayout() {
    // hooks
    const navigate = useNavigate()
    const { authUser, isUserLoading } = useSelector((state: RootState) => state.auth);
    const [loading, setLoading] = useState(true);
    
    // Check if user is authenticated
    useEffect(() => {
      if(!authUser && isUserLoading) return;
      
      // navigate unauthorized user 
      if(!authUser && !isUserLoading){
        navigate("/login", {replace:true});
      }

      // let the user access the page. 
      setLoading(false);
    }, [authUser,isUserLoading]);

  if (loading) return <PageLoading className="h-screen" />;

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
