import Son from "./Son"
import Draggable from 'react-draggable'
import { useState } from "react";
import Lottie from 'react-lottie';
import arrows from '../../../assets/lottie/arrows';

const Recup = ({ handleChangeState }) => {
    const [activeDrags, setActiveDrags] = useState(0);
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
        console.log(ui);
        const { x, y } = deltaPosition;
        if (ui.y > 350) {
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
                    <Draggable onDrag={(e, ui) => handleDrag(e, ui)} {...dragHandlers} >
                        <div style={{ left: '50%' }} className="box cursor-y">
                            <Son />
                        </div>
                    </Draggable>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: arrows,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice"
                            }
                        }}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div>
    )
}

export default Recup
