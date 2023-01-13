import { useParams } from "react-router-dom";
import Fleurs from "../enigmes/fleurs/Fleurs";
import Piano from "../enigmes/piano/Piano";
import Sons from "../enigmes/sons/Sons";

const Enigme = ({
  setEnigmaOneSolved,
  setEnigmaTwoSolved,
  setEnigmaThreeSolved }) => {
  let { enigmeId } = useParams();

  return (
    <div className="Enigme">
      {enigmeId === "1" ? <Sons setEnigmaOneSolved={setEnigmaOneSolved} /> : enigmeId === "2" ? <Fleurs setEnigmaTwoSolved={setEnigmaTwoSolved} /> : <Piano setEnigmaThreeSolved={setEnigmaThreeSolved} />}
    </div>
  );
};

export default Enigme;
