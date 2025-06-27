import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
// import AuthUserRoute from "../wrapper/AuthUserRoute";
import UserDashboard from "@/pages/user/dashboard/UserDashboard";
import SettingsLayout from "../layout/SettingsLayout";

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
        index: true,
        element: <UserDashboard />
      },
      {
        path: "default-cron-setup",
        element: <div>Default cron setup Page</div>
      },
      {
        path: "manual-cron-setup",
        element: <div>Manual cron setup Page</div>
      },
      {
        path: "profile",
        element: <div>Profile and password Page</div>
      },
      {
        path: "telegram",
        element: <div>Connect Telegram Page</div>
      },
      {
        path: "domain-setup-instructions",
        element: <div>Domain setup instration Page</div>
      },
      {
        path: "cloudflare-setup-instructions",
        element: <div>Cloudflare setup instructions Page</div>
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

