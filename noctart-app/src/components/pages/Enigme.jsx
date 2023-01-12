import { useParams } from "react-router-dom";
import Fleurs from "../enigmes/fleurs/Fleurs";
import Piano from "../enigmes/piano/Piano";
import Sons from "../enigmes/sons/Sons";

const Enigme = () => {
  let { enigmeId } = useParams();

  return (
    <div className="Enigme">
      {enigmeId === "1" ? <Sons /> : enigmeId === "2" ? <Fleurs /> : <Piano />}
    </div>
  );
};

export default Enigme;
