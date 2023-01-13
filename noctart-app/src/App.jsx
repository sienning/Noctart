import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";

import Accueil from "./components/pages/accueil/Accueil";
import Enigme from "./components/pages/Enigme";
import { SplashScreen } from "./components/splash-screen/SplashScreen";
import { ScanQrCode } from "./ScanQrCode";
import { Enigmes } from "./components/pages/enigmes/Enigmes";

function App() {
  const [enigmaOneSolved, setEnigmaOneSolved] = useState(false);
  const [enigmaTwoSolved, setEnigmaTwoSolved] = useState(false);
  const [enigmaThreeSolved, setEnigmaThreeSolved] = useState(false);

  const browserList = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/enigme",
      element: <Enigmes
        enigmaOneSolved={enigmaOneSolved}
        enigmaTwoSolved={enigmaTwoSolved}
        enigmaThreeSolved={enigmaThreeSolved}
      />,
    },
    {
      path: "/enigme/:enigmeId",
      element: <Enigme
        setEnigmaOneSolved={setEnigmaOneSolved}
        setEnigmaTwoSolved={setEnigmaTwoSolved}
        setEnigmaThreeSolved={setEnigmaThreeSolved}
      />,
    },
    {
      path: "/qrcode",
      element: <ScanQrCode />,
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
