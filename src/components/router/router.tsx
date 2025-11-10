import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import UserDashboardPage from "@/pages/user/dashboard/UserDashboard";
import SettingsLayout from "../layout/SettingsLayout";
import DashboardContainer from "../wrapper/DashboardContainer";
import CloudflareSetupPage from "@/pages/user/cloudflareSetup/CloudflareSetup";
import DhruFusionSetupPage from "@/pages/user/dhruFusionSetup/DhruFusionSetup";
import ConnectTelegramPage from "@/pages/user/connectTelegram/ConnectTelegram";
import ProfilePage from "@/pages/user/profile/Profile";
import CronHistoryPage from "@/pages/user/cronHistory/CronHistory";
import PackagesPage from "@/pages/package/Packages";
import AboutPage from "@/pages/about/About";
import RootLayout from "../layout/RootLayout";
import ContactPage from "@/pages/contact/Contact";
import PrivacyPolicyPage from "@/pages/privacyPolicy/PrivacyPolicy";
import TermsPage from "@/pages/terms/Terms";
import AdminLayout from "../layout/AdminLayout";
import NotFoundPage from "@/pages/shared/NotFound";
import AdminDashboardPage from "@/pages/admin/dashboard/AdminDashboard";
import RegisteredUsersPage from "@/pages/admin/users/RegisteredUsers";
import UserCronHistoryPage from "@/pages/admin/cronHistory/UserCronHistory";
import AllPackagesPage from "@/pages/admin/allPackages/AllPackages";
import LoginPage from "@/pages/authentication/Login";
import RegisterPage from "@/pages/authentication/Register";
import VerifyRegisterOTP from "@/pages/authentication/VerifyRegisterOTP";
import VerifyLoginOTP from "@/pages/authentication/VerifyLoginOTP";
import ResetPassword from "@/pages/authentication/ResetPassword";
import AddedDomains from "@/pages/admin/domain/AddedDomains";
import UserDetails from "@/pages/admin/users/UserDetails";
import CronSetup from "@/pages/user/manualCron/CronSetup";
import TransactionHistory from "@/pages/user/transactionHistory/TransactionHistory";
import InitializeTransaction from "@/pages/user/initializeTransaction/InitializeTransaction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "packages",
        element: <PackagesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
        {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-login-otp",
        element: <VerifyLoginOTP />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "verify-register-otp",
        element: <VerifyRegisterOTP />,
      },
      {
        path: "forgot-password",
        element: <div>Forgot password page</div>,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-and-condition",
        element: <TermsPage />,
      },
        {
        path: "test",
        element: <InitializeTransaction />,
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
        element: <UserDashboardPage />,
      },
      {
        path: "cron-setup",
        element: <CronSetup />,
      },
      {
        path: "cron-history",
        element: <CronHistoryPage />,
      },
      {
        path:"initialize-transaction",
        element:<InitializeTransaction />
      },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      }
      ,
      {
        path: "profile-and-password",
        element: <ProfilePage />,
      },
      {
        path: "connect-telegram",
        element: <ConnectTelegramPage />,
      },
      {
        path: "dhru-fusion-setup",
        element: <DhruFusionSetupPage />,
      },
      {
        path: "cloudflare-setup",
        element: <CloudflareSetupPage />,
      },
    ],
  },

  /* Admin */
  {
    path: "/admin",
    element: <AdminLayout />,
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
        element: <AdminDashboardPage />,
      },
      {
        path:"domains",
        element: <AddedDomains />
      }
      ,
      {
        path: "users",
        element: <RegisteredUsersPage />,
      },
        {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "user-cron-history",
        element: <UserCronHistoryPage />,
      },
      {
        path: "all-packages",
        element: <AllPackagesPage />,
      },
      {
        path: "profile-and-password",
        element: <ProfilePage />,
      },
      // {
      //   path: "connect-telegram",
      //   element: <ConnectTelegramPage />,
      // },
      // {
      //   path: "dhru-fusion-setup",
      //   element: <DhruFusionSetupPage />,
      // },
      // {
      //   path: "cloudflare-setup",
      //   element: <CloudflareSetupPage />,
      // },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
]);
