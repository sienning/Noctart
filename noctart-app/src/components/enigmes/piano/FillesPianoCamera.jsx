import { useEffect, useState } from "react";
import PianoTouch from "./PianoTouch";
import "./piano.css";
import InfosSvg from "../../svg/InfosSvg";
import SpeakerSvg from "../../svg/SpeakerSvg";
import OrangerieLogoO from "../../../assets/logo-o-orangerie-grey.svg";
import ScanDragSvg from "../../svg/ScanDragSvg";
import PianoSvg from "../../svg/PianoSvg";
import { useNavigate } from "react-router-dom";
import ArrowUpSvg from "../../svg/ArrowUpSvg";
import JeunesFillesAuPiano from "../../../assets/img/jeunes-filles-au-piano.png";
import PuzzleSvg from "../../svg/PuzzleSvg";

const FillesPianoCamera = () => {
  const navigate = useNavigate();

  const [isPlayingEngima, setIsPlayingEnigma] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [state, setState] = useState("scan");
  const [resolved, setResolved] = useState(true);

  const actions = (value) => {
    switch (value) {
      case "scan":
        return {
          logo: <PianoSvg />,
        };
      case "infos":
        return {
          logo: <ArrowUpSvg />,
          onClick: () => {
            console.log("infos");
          },
        };
    }
  };

  const handleTap = () => {
    if (resolved) return;
    setIsPlayingEnigma(true);
  };

  useEffect(() => {
    if (!isPlayingEngima) {
      window.addEventListener("arjs-nft-loaded", (event) => {
        console.log(event);
        const marker = document.querySelector("a-nft");

        marker.addEventListener("markerFound", (event) => {
          console.log("event", event);
          setIsFound(true);
        });
        marker.addEventListener("markerLost", () => {
          console.log("marqueur perdu");
          setIsFound(false);
        });
      });
    }
  }, [isPlayingEngima]);

  useEffect(() => {
    if (resolved) {
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
    }
  }, [resolved]);

  return (
    <div className="containerEnigmaPiano">
      {isPlayingEngima && !resolved && (
        <div>
          <PianoTouch
            setIsPlayingEnigma={setIsPlayingEnigma}
            setState={setState}
            setResolved={setResolved}
          />
        </div>
      )}

      {!isPlayingEngima && (
        <>
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
                  <p className="labelEnigmaNumber">3</p>
                </div>
              </button>
            </div>

            {resolved ? (
              <div
                className="containerOptions"
                style={{ justifyContent: "flex-end" }}
              >
                <PuzzleSvg />
              </div>
            ) : (
              <div className="containerOptions">
                <InfosSvg />

                <SpeakerSvg />
              </div>
            )}
          </div>

          {!resolved && (
            <div id="camera-ar">
              <div className="arjs-loader">
                <div>Chargement, patientez...</div>
              </div>

              <a-scene
                vr-mode-ui="enabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                embedded
                arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
              >
                <a-nft
                  type="nft"
                  url="assets/nft/renoir/renoir"
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
          )}

          {resolved && <img src={JeunesFillesAuPiano} />}

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
            <button
              onClick={actions(state).onClick}
              style={{
                zIndex: 1,
              }}
            >
              {actions(state).logo}
            </button>
          </div>
        </>
      )}

      {isFound && !resolved && (
        <div onClick={handleTap} className="scanTouchButton">
          <ScanDragSvg />
        </div>
      )}
    </div>
  );
};

export default FillesPianoCamera;
