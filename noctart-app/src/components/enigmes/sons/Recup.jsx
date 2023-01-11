import Son from "./Son"
import Draggable from 'react-draggable'
import { useState } from "react";

const Recup = () => {
    const [activeDrags, setActiveDrags] = useState(0);
    const [deltaPosition, setDeltaPosition] = useState({
        x: 0, y: 0
    });
    const [controlledPosition, setControlledPosition] = useState({
        x: -400, y: 200
    });


    const onStart = () => {
        let newAct = activeDrags + 1
        setActiveDrags(newAct);
    };

    const onStop = () => {
        let newAct = activeDrags - 1
        setActiveDrags(newAct);
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };


    return (
        <div className="Recup">
            <div>
                <h3>Recupérer le son du tableau</h3>
                <div style={{ width: "200px", height: "200px" }}>
                    <Draggable {...dragHandlers} >
                        <div className="box cursor-y">
                            <Son />
                        </div>
                    </Draggable>
                </div>
            </div>
        </div>
    )
}

export default Recup
