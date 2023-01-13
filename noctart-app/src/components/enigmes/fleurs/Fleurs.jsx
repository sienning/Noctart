import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import { LineDot } from "../../lineDot/LineDot";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./fleurs.css";
import BouquetsImg from "../../../assets/img/bouquets.png";
import InfosSvg from "../../svg/InfosSvg";
import { ScanQrCode } from "../../../ScanQrCode";
import OrangerieLogoO from "../../../assets/logo-o-orangerie-grey.svg";
import QrCodeSvg from "../../svg/QrCodeSvg";
import FlowerSvg from "../../svg/FlowerSvg";
import CheckSvg from "../../svg/CheckSvg";
import ValidatedSvg from "../../svg/ValidatedSvg";

const Fleurs = () => {
  const navigate = useNavigate();

  const [startEnigma, setStartEnigma] = useState(false);
  const [state, setState] = useState("scan");

  const actions = (value) => {
    switch (value) {
      case "initial":
        return {
          logo: <ValidatedSvg />,
        };
      case "scan":
        return {
          logo: <QrCodeSvg />,
        };
      case "found":
        return {
          logo: <CheckSvg />,
        };
      case "infos":
        return {
          logo: <InfosSvg />,
        };
    }
  };

  return (
    <div className="containerFlowers">
      {startEnigma ? (
        <div className="containerEnigmaFlowers">
          {/* HEADER BAR */}
          <div className="headerBar">
            <div className="headerBarContent">
              <button
                className="buttonLabelEnigma"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <div className="labelEnigma">
                  <p className="labelEnigmaNumber">2</p>
                </div>
              </button>
            </div>

            <div
              className="containerOptions"
              style={{ justifyContent: "flex-end" }}
            >
              <InfosSvg />
            </div>
          </div>

          <ScanQrCode />

          {/* BOTTOM BAR */}
          <div
            style={{
              height: "12vh",
              backgroundImage: `url(${OrangerieLogoO})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>{actions(state).logo}</div>
          </div>
        </div>
      ) : (
        <>
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

              <LineDot dot={false} />
            </div>

            <div className="containerLogo">
              <LineDot dot={false} />

              <div style={{ padding: 20 }}>
                <OrangerieLogoDarkSmallSvg />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="containerDescriptionFlowers">
            <p className="title">Fais-moi une fleur</p>

            <p className="description">
              Madame Cézanne est contrariée, elle s’est toujours demandée ce que
              donnerait le tableau qui la représente s’il avait été achevé. Elle
              aimerait y voir des fleurs, plus de fleurs, récupères-en dans les
              autres oeuvres pour les disposer dans la sienne et satisfaire sa
              curiosité !
            </p>

            <button
              className="buttonStart"
              onClick={() => setStartEnigma(true)}
            >
              JOUER
            </button>
          </div>

          <div className="flowers">
            <img src={BouquetsImg} style={{ width: "100vw" }} />
          </div>
        </>
      )}
    </div>
  );
};

export default Fleurs;
