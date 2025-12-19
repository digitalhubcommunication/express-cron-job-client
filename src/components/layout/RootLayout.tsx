import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function RootLayout() {
  return (
    <div className="w-full flex flex-col grow">
      <Navbar />
      <div className="w-full flex flex-col grow max-h-screen !overflow-y-auto overflow-x-hidden">
        <div className="w-full grow border-t pt-[63px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
