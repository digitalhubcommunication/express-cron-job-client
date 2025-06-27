import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import PrivateSidebar from "./components/shared/PrivateSidebar";

function App() {
  return (
    <main className="flex min-h-screen w-full items-start">
      <PrivateSidebar />
      <div className="grow h-full flex flex-col">
        <Navbar />
        <div className="grow w-full overflow-y-auto">
          {/* Main content goes here */}
          <Outlet />
        </div>
      </div>

      {/* <CheckAccessToken /> */}
    </main>
  );
}

export default App;
