import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { LineDot } from "../../lineDot/LineDot";
import InfosSvg from "../../svg/InfosSvg";
import SpeakerSvg from "../../svg/SpeakerSvg";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import PainterSvg from "../../svg/PainterSvg";
import ScanDragSvg from "../../svg/ScanDragSvg";
import Recup from "./Recup";
import Rendre from "./Rendre";
import "./sons.css";
import OrangerieLogoO from "../../../assets/logo-o-orangerie.svg";
import { useNavigate } from "react-router-dom";
import ArrowDownSvg from "../../svg/ArrowDownSvg";
import SoundSvg from "../../svg/SoundSvg";
import PuzzleSvg from "../../svg/PuzzleSvg";
import EcranFin from "./EcranFin";

const Sons = () => {
  const [isResolved, setIsResolved] = useState(false);
  const [isRecup, setIsRecup] = useState(false);
  const [isRendre, setIsRendre] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const [startEnigma, setStartEnigma] = useState(false);
  const [state, setState] = useState("getSound");
  const [inventory, setInventory] = useState("");
  const [capturedPainting, setCapturedPainting] = useState("");
  const [viewPainting, setViewPainting] = useState("");
  const [level, setLevel] = useState(0);

  const handleRecup = () => {
    setIsRecup(true);
    setIsRendre(false);
    let soundPlay;
    let capPainting = viewPainting;
    setCapturedPainting(viewPainting)

    if (capPainting === "utrillo") {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_bateau.mp3`);
      setInventory("utrillo")
    } else {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_montmartre.mp3`);
      setInventory("rousseau")
    }
    soundPlay.play();
  };

  const handleRendre = () => {
    console.log("handleRendre");
    setIsRecup(false);
    setIsRendre(true);
    let soundPlay;
    let capPainting = viewPainting;
    setCapturedPainting(viewPainting);

    console.log("capPainting", capPainting);
    console.log("inventory", inventory);

    if (capPainting === "utrillo" && inventory === "utrillo") {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_montmartre.mp3`);
      if (level < 2) {
        setInventory("rousseau")
      }

    } else if (capPainting === "rousseau" && inventory === "rousseau") {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_bateau.mp3`);
      if (level < 2) {
        setInventory("utrillo")
      }
    } else if (capPainting === "rousseau" && inventory === "utrillo") {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_bateau.mp3`);
      setInventory("rousseau");
    } else if (capPainting === "utrillo" && inventory === "rousseau") {
      soundPlay = new Audio(`/assets/painting-sounds/Sound_montmartre.mp3`);
      setInventory("utrillo");
    }
    soundPlay.play();
  };

  const actions = (value) => {
    switch (value) {
      case "getSound":
        return {
          logo: <ArrowDownSvg />,
          action: handleRecup,
        };
      case "giveSound":
        return {
          logo: <SoundSvg />,
          action: handleRendre,
        };
      case "solved":
        return {
          logo: <PuzzleSvg />,
        };
      case "infos":
        return {
          logo: <InfosSvg />,
        };
    }
  };

  const handleClickAction = () => {
    setIsFound(false)
    console.log("state : ", state);
    actions(state).action();
  };

  useEffect(() => {
    console.log("capturedPainting", capturedPainting);

    window.addEventListener("arjs-nft-loaded", (event) => {
      const markerRousseau = document.getElementById("rousseau-nft");
      const markerUtrillo = document.getElementById("utrillo-nft");
      markerRousseau.addEventListener("markerFound", (event) => {
        console.log("capturedPainting");
        setViewPainting("rousseau")
        if (capturedPainting !== "rousseau") {
          console.log("capturedPainting", capturedPainting);
          setIsFound(true);
        }
      });
      markerRousseau.addEventListener("markerLost", () => {
        console.log("marqueur perdu");
        setIsFound(false);
      });

      markerUtrillo.addEventListener("markerFound", (event) => {
        console.log("capturedPainting");
        setViewPainting("utrillo")
        if (capturedPainting !== "utrillo") {
          console.log("capturedPainting", capturedPainting);
          setIsFound(true);
        }
      });
      markerUtrillo.addEventListener("markerLost", () => {
        console.log("marqueur perdu");
        setIsFound(false);
      });
    });
  }, []);

  useEffect(() => { }, []);

  const navigate = useNavigate();

  const handleChangeState = (newState) => {
    console.log(level);
    if (level + 1 < 3) {
      if (level + 1 === 1) { // On vient de prendre un son
        console.log("On vient de prendre un son");
        if (newState === "giveSound") { // La prochaine étape est de le rendre
          setIsRecup(false)
        }
      } else if (level + 1 === 2) { // On a rendu un son, au passage on en a récupéré un
        console.log("On a rendu un son, au passage on en a récupéré un");
        if (newState === "giveSound") { // On va rendre le son au dernier tableau
          setIsRendre(false)
        }
      }

      setState(newState)
      setLevel(level + 1)
    } else {
      setIsRendre(false);
      setState("solved");
      setIsResolved(true);
    }
  }

  return (
    <div className="containerSons">
      {startEnigma ? (
        <div className="containerEnigmaSons" >
          {/* HEADER BAR */}
          <div className="headerBar">
            <div className="headerBarContent">
              <button
                className="buttonLabelEnigma"
                onClick={() => {
                  navigator.mediaDevices
                    .getUserMedia({ audio: false, video: true })
                    .then((mediaStream) => {
                      document.querySelector("video").srcObject = mediaStream;
                      const tracks = mediaStream.getTracks();
                      tracks[0].stop();
                    })
                    .finally(() => {
                      document.querySelector("video").remove();
                    });

                  navigate(-1);
                }}
              >
                <div className="labelEnigma">
                  <p className="labelEnigmaNumber">1</p>
                </div>
              </button>
            </div>

            <div className="containerOptions">
              <InfosSvg />

              <SpeakerSvg />
            </div>
          </div>

         

          {/* CAMERA */}
          <div className="arjs-loader">
            <div className="arjsLoaderText">Loading, please wait...</div>
          </div>

          <div id="ar">
            <a-scene
              vr-mode-ui="enabled: false;"
              renderer="logarithmicDepthBuffer: true;"
              embedded
              arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false; "
            >
              <a-nft
                id="rousseau-nft"
                type="nft"
                url="assets/nft/rousseau/rousseau"
                smooth="true"
                smoothCount="10"
                smoothTolerance=".01"
                smoothThreshold="5"
                emitevents="true"
              >
                <a-entity
                  gltf-model=""
                  scale="5 5 5"
                  position="150 300 -100"
                ></a-entity>
              </a-nft>
              <a-nft
                id="utrillo-nft"
                type="nft"
                url="assets/nft/utrillo/utrillo"
                smooth="true"
                smoothCount="10"
                smoothTolerance=".01"
                smoothThreshold="5"
                emitevents="true"
              >
                <a-entity
                  gltf-model=""
                  scale="5 5 5"
                  position="150 300 -100"
                ></a-entity>
              </a-nft>
              <a-entity camera></a-entity>
            </a-scene>
          </div>
          {
            isResolved &&
            <div style={{ zIndex: 1 }}>
              <EcranFin />
            </div>
          }

          {isRecup && (
            <div style={{ zIndex: 1 }}>
              <Recup handleChangeState={handleChangeState} />
            </div>
          )}
          {isRendre && <Rendre handleChangeState={handleChangeState} />}
          <div>
            <button onClick={handleRecup} style={{ marginRight: 10 }}>
              Récupérer un son
            </button>
            <button onClick={handleRendre}>Rendre un son</button>
          </div>

          {isFound && (
            <motion.button className="cameraAction" onClick={handleClickAction}>
              <ScanDragSvg />
            </motion.button>
          )}


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
          <div className="containerDescriptionSons">
            <p className="title">Méli-mélodie</p>

            <p className="description">
              Aide le peintre vivant dans le tableau de Maurice Utrillo en
              retrouvant la musique qui va avec l’oeuvre. <br /> Pour cela,
              cherches dans la salle parmi les autres peintures et associe
              l’ambiance sonore à l’oeuvre correspondante... <br /> À toi de
              jouer !
            </p>

            <button
              className="buttonStart"
              onClick={() => setStartEnigma(true)}
            >
              JOUER
            </button>
          </div>

          <div className="painter">
            <PainterSvg />
          </div>
        </>
      )}
    </div>
  );
};

export default Sons;
