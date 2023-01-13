import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LineDot } from "../../lineDot/LineDot";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./fleurs.css";
import BouquetsImg from "../../../assets/img/bouquets.png";
import InfosSvg from "../../svg/InfosSvg";
import { ScanQrCode } from "../../../ScanQrCode";
import OrangerieLogoOGrey from "../../../assets/logo-o-orangerie-grey.svg";
import OrangerieLogoOOrange from "../../../assets/logo-o-orangerie-orange.svg";
import QrCodeSvg from "../../svg/QrCodeSvg";
import FlowerSvg from "../../svg/FlowerSvg";
import CheckSvg from "../../svg/CheckSvg";
import ValidatedSvg from "../../svg/ValidatedSvg";
import madameCezanne from "../../../assets/img/madame-cezanne-crop.png";
import fleursDansUnVase from "../../../assets/img/fleurs-dans-un-vase.png";
import bouquetDeTulipes from "../../../assets/img/bouquet-de-tulipes.png";
import bouquetDansUneLoge from "../../../assets/img/bouquet-dans-une-loge.png";

const Fleurs = () => {
  const navigate = useNavigate();

  const [startEnigma, setStartEnigma] = useState(false);
  const [state, setState] = useState("initial");
  const [help, setHelp] = useState(false);
  const [painting, setPainting] = useState("");
  const [dataPainting, setDataPainting] = useState(null);

  const actions = (value) => {
    switch (value) {
      case "initial":
        return {
          logo: <ValidatedSvg />,
          onClick: () => {
            setState("scan");
          },
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

  const handleClickHelp = () => {
    if (!help) {
      setHelp(true);
    } else {
      setHelp(false);
    }
  };

  const data = [
    {
      title: "Fleurs dans un vase",
      img: fleursDansUnVase,
    },
    {
      title: "Bouquet de tulipes",
      img: bouquetDeTulipes,
    },
    {
      title: "Bouquet dans une loge",
      img: bouquetDansUneLoge,
    },
  ];

  useEffect(() => {
    console.log(painting);
    if (painting) {
      const result = data.find((value) => value.title === painting);
      setDataPainting(result);
    }
  }, [painting]);

  console.log(dataPainting);

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
              style={{ justifyContent: "flex-end" }}
              onClick={handleClickHelp}
            >
              <InfosSvg />
            </div>
          </div>

          {state === "initial" ? (
            <div className="containerInitial">
              <div
                className="containerMessageFlowers"
                style={{
                  backgroundImage: `url(${OrangerieLogoOOrange})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundSize: "270px",
                }}
              >
                {help ? (
                  <p
                    style={{
                      color: "#FC8C1E",
                      fontSize: "14px",
                      fontWeight: 600,
                      padding: "0px 10px",
                    }}
                  >
                    Trouvez un moyen d'embellir le jardin de Madame Cézanne en
                    trouvant des fleurs.
                  </p>
                ) : (
                  <p
                    style={{
                      color: "#3D3636",
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    “ Puis-je vous demander une faveur j'aimerais égayer mon
                    jardin, pouvez-vous me rapporter des fleurs ? “
                  </p>
                )}
              </div>

              <img
                src={madameCezanne}
                style={{
                  width: "100vw",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </div>
          ) : state === "scan" ? (
            <ScanQrCode setState={setState} setPainting={setPainting} />
          ) : state === "found" ? (
            <div>
              <img src={dataPainting.img} style={{ width: "100vw" }} />
            </div>
          ) : (
            <p>INFOS</p>
          )}

          {/* BOTTOM BAR */}
          <div
            style={{
              height: "12vh",
              backgroundImage: `url(${OrangerieLogoOGrey})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                onClick={actions(state).onClick}
                style={{
                  display: "flex",
                  alignSelf: state === "found" ? "flex-end" : "center",
                }}
              >
                {state === "found" &&
                  [...Array(3)].map(() => (
                    <div style={{ marginRight: "30px" }}>{<FlowerSvg />}</div>
                  ))}
                {actions(state).logo}
              </div>
            </div>
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
