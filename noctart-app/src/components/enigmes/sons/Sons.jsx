import { useEffect, useRef, useState } from "react";
import Recup from "./Recup";
import Rendre from "./Rendre";
import { Camera } from "react-camera-pro";

const Sons = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [isRecup, setIsRecup] = useState(false);
    const [isRendre, setIsRendre] = useState(false);
    const [devices, setDevices] = useState([]);
    const [activeDeviceId, setActiveDeviceId] = useState(undefined);

    const handleRecup = () => {
        setIsRecup(true)
        setIsRendre(false)
    }

    const handleRendre = () => {
        setIsRecup(false)
        setIsRendre(true)
    }

    useEffect(() => {
        (async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(i => i.kind == 'videoinput');
            setDevices(videoDevices);
            if (videoDevices.length === 1) setActiveDeviceId(videoDevices[0].deviceId)
        })();
    });


    return (
        <div className="Sons">
            <div>
                <h1>Sons des tableaux</h1>
                <div
                    className="camera-div"
                >
                    <Camera
                        ref={camera}
                        numberOfCamerasCallback={setNumberOfCameras}
                        facingMode='environment'
                        aspectRatio="cover"
                        videoSourceDeviceId={activeDeviceId}
                    />
                </div>
                <span>{activeDeviceId}</span>
                <select
                    onChange={event => {
                        setActiveDeviceId(event.target.value);
                    }}
                >
                    {devices.map(d => (
                        <option key={d.deviceId} value={d.deviceId}>
                            {d.label}
                        </option>
                    ))}
                </select>
                { isRecup && <Recup /> }
                { isRendre && <Rendre /> }
                <div>
                    <button onClick={handleRecup} style={{ marginRight: 10 }}>Récupérer un son</button>
                    <button onClick={handleRendre}>Rendre un son</button>
                </div>
            </div>
        </div>
    )
}

export default Sons
