import {
    Link,
    useParams
} from "react-router-dom";
import Fleurs from "../enigmes/Fleurs";
import Piano from "../enigmes/piano/Piano";
import Sons from "../enigmes/sons/Sons";

const Enigme = () => {
    let { enigmeId } = useParams()


    return (
        <div className="Enigme">
            <div>
                <h1>Enigme {enigmeId}</h1>
                {
                    enigmeId === "1" ?
                        <Sons />
                        : enigmeId === "2" ?
                            <Fleurs />
                            : <Piano />
                }
            </div>
        </div>
    )
}

export default Enigme
