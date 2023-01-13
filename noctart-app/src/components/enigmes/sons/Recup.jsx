import Son from "./Son"
import Draggable from 'react-draggable'
import { useState } from "react";
import Lottie from 'lottie-react';
import arrows from '../../../assets/lottie/arrows.json';

const Recup = ({ handleChangeState }) => {
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
        const { x, y } = deltaPosition;
        if (ui.y > 350) {
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
        <div className="Recup">
            <div>
                <h3>Recupérer le son du tableau</h3>
                <div style={{ width: "200px", height: "200px", margin: "auto" }}>
                    {
                        isVisible &&
                        <Draggable onDrag={(e, ui) => handleDrag(e, ui)} {...dragHandlers} >
                            <div style={{ left: '50%' }} className="box cursor-y">
                                <Son />
                            </div>
                        </Draggable>
                    }
                    <Lottie
                        animationData={arrows}
                        loop={true}
                        autoplay={true}
                        style={{
                            left: "50%",
                            transform: "translate(-50%, -30%)",
                            zIndex: "-1",
                            position: "absolute",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Recup
