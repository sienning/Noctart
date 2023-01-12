import { Link } from "react-router-dom";
import { LineDot } from "../../lineDot/LineDot";
import DetectiveSvg from "../../svg/DetectiveSvg";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import OrangerieLogoDarkSmallSvg from "../../svg/OrangerieLogoDarkSmallSvg";
import "./accueil.css";

const Accueil = () => {
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

      {/* DESCRIPTION */}
      <div className="containerDescription">
        <p className="title">Bienvenue dans l’expérience N’octart</p>

        <p className="description">
          Une légende raconte que certaines oeuvres présentes au musée de
          l’orangerie se manifestent lorsque la nuit tombe, elles s’animent car
          elles ne peuvent demeurer en paix dans ces lieux… <br />
          Votre mission si vous l’acceptez, est de vous y rendre de nuit pour
          comprendre la raison de leurs tracas, et faire en sorte qu’elles
          puissent retrouver leur tranquillité.
        </p>

        <Link to="/enigme" className="linkStart">
          COMMENCER
        </Link>

        <div className="detective">
          <DetectiveSvg />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
