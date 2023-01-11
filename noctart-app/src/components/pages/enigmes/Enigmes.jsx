import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LineDot } from "../../lineDot/LineDot";
import LockSvg from "../../svg/LockSvg";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./enigmes.css";

export const Enigmes = () => {
  const [enigmaOneSolved, setEnigmaOneSolved] = useState(false);
  const [enigmaTwoSolved, setEnigmaTwoSolved] = useState(false);
  const [enigmaThreeSolved, setEnigmaThreeSolved] = useState(false);

  return (
    <div className="container">
      {/* LOGOS AND BACKGROUND LINES DOTS */}
      <div className="containerLogos">
        <div className="containerLogo">
          <div
            style={{
              padding: 20,
            }}
          >
            <NoctartLogoDarkSmallSvg />
          </div>

          <LineDot />
        </div>

        <div className="containerLogo">
          <LineDot />

          <div style={{ padding: 20 }}>
            <OrangerieLogoDarkSmallSvg />
          </div>
        </div>
      </div>

      {/* ENIGMAS LIST */}
      <div className="containerEnigmas">
        <Link to="/enigme/1" style={{ color: "#3D3636" }}>
          <div className="containerEnigma">
            <p
              className="enigmaNumber"
              style={{ color: enigmaOneSolved ? "#FC8C1E" : "#3D3636" }}
            >
              Énigme 1
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                className="enigmaTitle"
                style={{
                  fontWeight: 700,
                  color: enigmaOneSolved ? "#FC8C1E" : "#3D3636",
                }}
              >
                Méli-mélodie
              </p>
            </div>
          </div>
        </Link>

        {enigmaOneSolved ? (
          <Link to="/enigme/2" style={{ color: "#3D3636" }}>
            <div className="containerEnigma">
              <p
                className="enigmaNumber"
                style={{
                  marginLeft: "10px",
                  color: enigmaTwoSolved ? "#FC8C1E" : "#3D3636",
                }}
              >
                Énigme 2
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="enigmaTitle"
                  style={{
                    fontWeight: 700,
                    color: enigmaTwoSolved ? "#FC8C1E" : "#3D3636",
                  }}
                >
                  Fais-moi une fleur
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="containerEnigma">
            <div style={{ display: "flex", alignItems: "center" }}>
              <LockSvg />
              <p
                className="enigmaNumber"
                style={{
                  fontWeight: 700,
                  marginLeft: "10px",
                  color: enigmaTwoSolved ? "#FC8C1E" : "#3D3636",
                }}
              >
                Énigme 2
              </p>
            </div>
          </div>
        )}

        {enigmaTwoSolved ? (
          <Link to="/enigme/3" style={{ color: "#3D3636" }}>
            <div className="containerEnigma">
              <p
                className="enigmaNumber"
                style={{
                  marginLeft: "10px",
                  color: enigmaThreeSolved ? "#FC8C1E" : "#3D3636",
                }}
              >
                Énigme 3
              </p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="enigmaTitle"
                  style={{
                    fontWeight: 700,
                    color: enigmaThreeSolved ? "#FC8C1E" : "#3D3636",
                  }}
                >
                  Changement de gamme
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="containerEnigma">
            <div style={{ display: "flex", alignItems: "center" }}>
              <LockSvg />
              <p
                className="enigmaNumber"
                style={{
                  fontWeight: 700,
                  marginLeft: "10px",
                  color: enigmaTwoSolved ? "#FC8C1E" : "#3D3636",
                }}
              >
                Énigme 3
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};