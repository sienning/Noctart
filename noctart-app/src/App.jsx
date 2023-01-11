import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./components/pages/accueil/Accueil";
import Enigme from "./components/pages/Enigme";
import { SplashScreen } from "./components/splash-screen/SplashScreen";
import { useState } from "react";

function App() {
  const browserList = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/enigme/:enigmeId",
      element: <Enigme />,
    },
  ];

  const router = createBrowserRouter(browserList);

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default SplashScreen(App);
