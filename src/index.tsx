import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BackupsPage from "./pages/backups/BackupsPage";
import BackupFailureReasonPage from "./pages/backups/BackupFailureReasonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/backups" />,
  },
  {
    path: "/backups",
    element: <BackupsPage />,
  },
  {
    path: "/backups/failure/reason/:failureReasonId",
    element: <BackupFailureReasonPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
