import { Link } from "react-router-dom";
import NoctartLogoDarkSmallSvg from "../../svg/NoctartLogoDarkSmallSvg";
import "./accueil.css";

const Accueil = () => {
  return (
    <div className="container">
      <NoctartLogoDarkSmallSvg />

      <div>
        <h1>Accueil</h1>
        <Link style={{ marginRight: 10 }} to="/">
          Accueil
        </Link>
        <Link style={{ marginRight: 10 }} to="/enigme/1">
          Enigme 1
        </Link>
        <Link style={{ marginRight: 10 }} to="/enigme/2">
          Enigme 2
        </Link>
        <Link to="/enigme/3">Enigme 3</Link>
      </div>
    </div>
  );
};

export default Accueil;
