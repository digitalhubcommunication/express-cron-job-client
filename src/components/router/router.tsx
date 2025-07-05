import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
// import AuthUserRoute from "../wrapper/AuthUserRoute";
import UserDashboard from "@/pages/user/dashboard/UserDashboard";
import SettingsLayout from "../layout/SettingsLayout";
import DashboardContainer from "../wrapper/DashboardContainer";
import CloudflareSetup from "@/pages/user/cloudflareSetup/CloudflareSetup";
import DhruFusionSetup from "@/pages/user/dhruFusionSetup/DhruFusionSetup";
import ConnectTelegram from "@/pages/user/connectTelegram/ConnectTelegram";
import Profile from "@/pages/user/profile/Profile";
import CronHistory from "@/pages/user/cronHistory/CronHistory";
import ManualCrons from "@/pages/user/manualCron/ManualCrons";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <div>Blog Page</div>,
      },
      {
        path: "contact",
        element: <div>Contact page</div>,
      },
      {
        path: "login",
        element: <div>Login page</div>,
      },
      {
        path: "register",
        element: <div>Register page</div>,
      },
      {
        path: "forgot-password",
        element: <div>Forgot password page</div>,
      },
    ],
  },

  /* dashboard */
  {
    path: "/settings",
    element: <SettingsLayout />,
    children: [
      {
        index: true,
        element: (
          <DashboardContainer>
            <h5 className="text-center mt-20">
              Welcome! Good to have you back.
            </h5>
          </DashboardContainer>
        ),
      },
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "manual-cron-setup",
        element: <ManualCrons />,
      },
      {
        path: "cron-history",
        element: <CronHistory />,
      },
      {
        path: "profile-and-password",
        element: <Profile />,
      },
      {
        path: "connect-telegram",
        element: <ConnectTelegram />,
      },
      {
        path: "dhru-fusion-setup",
        element: <DhruFusionSetup />,
      },
      {
        path: "cloudflare-setup",
        element: <CloudflareSetup />,
      },
    ],
    index: false,
  },
]);
