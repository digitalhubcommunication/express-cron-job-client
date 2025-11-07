import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";
import ReduxProvider from "./provider/reduxProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
import BodyEventListeners from "./components/DOM/BodyEventListeners";
import ModalPortal from "./components/DOM/ModalPortal";
import ReactToastifyMessage from "./components/DOM/ReactToastifyMessage";
import InitialProfileLoader from "./components/loader/InitialProfileLoader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ReduxProvider>
        <RouterProvider router={router} />

        {/* ====== DOM Manupulation, Modal & Toast ====== */}
        <BodyEventListeners />
        <ModalPortal />
        <ReactToastifyMessage />
        <InitialProfileLoader />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>
);
