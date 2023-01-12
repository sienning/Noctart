import React from "react";

import { LineDot } from "../../lineDot/LineDot";
import FlowersSvg from "../../svg/FlowersSvg";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./fleurs.css";

const Fleurs = () => {
  return (
    <div className="containerFlowers">
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

        <button className="buttonStart" onClick={() => setStartEnigma(true)}>
          JOUER
        </button>
      </div>

      <div className="flowers">
        <FlowersSvg />
      </div>
    </div>
  );
};

export default Fleurs;
