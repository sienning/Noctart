import React, { useState } from "react";

import FillesPianoCamera from "./FillesPianoCamera";
import { LineDot } from "../../lineDot/LineDot";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./piano.css";

const Piano = () => {
  const [startEnigma, setStartEnigma] = useState(false);

  return (
    <div className="containerPiano">
      {startEnigma ? (
        <FillesPianoCamera />
      ) : (
        <>
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

          <div className="containerDescriptionFlowers">
            <p className="title">Changement de gamme</p>

            <p className="description">
              Les jeunes filles au piano désirent apprendre un morceau, mais en
              vain. C'est maintenant à vous des les aider pour jouer les
              premières notes d'un morceau qui les aidera à déchiffrer la
              partition devant elles.
            </p>

            <button
              className="buttonStart"
              onClick={() => setStartEnigma(true)}
            >
              JOUER
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Piano;
