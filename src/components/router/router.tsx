import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
// import AuthUserRoute from "../wrapper/AuthUserRoute";
import UserDashboard from "@/pages/user/dashboard/UserDashboard";
import SettingsLayout from "../layout/SettingsLayout";
import DashboardContainer from "../wrapper/DashboardContainer";
import CloudflareSetup from "@/pages/user/cloudflareSetup/CloudflareSetup";
import DhruFusionSetup from "@/pages/user/dhruFusionSetup/DhruFusionSetup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/blog",
    element: <div>Blog Page</div>
  },
  {
    path:"/settings",
    element: <SettingsLayout />,
     children: [
      {
        index:true,
        element: <DashboardContainer><h5 className="text-center mt-20">Welcome! Good to have you back.</h5></DashboardContainer>
      },
      {
        path:"dashboard",
        element: <UserDashboard />
      },
      {
        path: "cron-history",
        element: <div>History setup Page</div>
      },
      {
        path: "manual-cron-setup",
        element: <div>Manual cron setup Page</div>
      },
      {
        path: "profile-and-password",
        element: <div>Profile and password Page</div>
      },
      {
        path: "connect-telegram",
        element: <div>Connect Telegram Page</div>
      },
      {
        path: "dhru-fusion-setup",
        element: <DhruFusionSetup />
      },
      {
        path: "cloudflare-setup",
        element: <CloudflareSetup />
      }
    ],
    index: false
  },
  {
    path: "/contact",
    element: <div>Contact page</div>
  },
  {
    path: "/login",
    element: <div>Login page</div>
  },
  {
    path: "/register",
    element: <div>Register page</div>
  },
  {
    path: "/forgot-password",
    element: <div>Forgot password page</div>
  },
])

