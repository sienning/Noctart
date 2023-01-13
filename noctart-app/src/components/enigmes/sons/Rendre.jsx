import Son from "./Son"
import Draggable from 'react-draggable'
import { useState } from "react";
import Lottie from 'lottie-react';
import arrows from '../../../assets/lottie/arrows.json';

const Rendre = ({ handleChangeState }) => {
    const [activeDrags, setActiveDrags] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [deltaPosition, setDeltaPosition] = useState(
        {
            x: 0,
            y: 0
        }
    );

    const onStart = () => {
        let newAct = activeDrags + 1
        setActiveDrags(newAct);
    };

    const handleDrag = (e, ui) => {
        console.log("y : ", ui.y);
        const { x, y } = deltaPosition;
        if (ui.y < -180) {
            console.log("on donne le son");
            setIsVisible(false);
            handleChangeState("giveSound")
        }
    };

    const onStop = () => {
        let newAct = activeDrags - 1
        setActiveDrags(newAct);
    };

    const dragHandlers = { onStart: onStart, onStop: onStop, axis: "y" };


    return (
        <div className="Recup" style={{ zIndex: 100 }}>
            <div>
                <h3>Rendre le son au tableau</h3>
                <div style={{ width: "200px", height: "200px", margin: "auto" }}>
                    <Lottie
                        animationData={arrows}
                        loop={true}
                        autoplay={true}
                        style={{
                            left: "50%",
                            transform: "translate(-50%, -30%) rotate(180deg)",
                            zIndex: "-1",
                            position: "absolute",
                        }}
                    />
                    {
                        isVisible &&
                        <Draggable onDrag={(e, ui) => handleDrag(e, ui)} {...dragHandlers} >
                            <div style={{ position: "absolute", top: "600px", left: "calc(50% - 25px)" }} className="box cursor-y">
                                <Son />
                            </div>
                        </Draggable>
                    }
                </div>
            </div>
        </div>
    )
}

export default Rendre
