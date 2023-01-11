import { useEffect, useRef, useState } from "react";
import Recup from "./Recup";
import Rendre from "./Rendre";

const Sons = () => {
    const [isRecup, setIsRecup] = useState(false);
    const [isRendre, setIsRendre] = useState(false);
    const [devices, setDevices] = useState([]);

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



    useEffect(() => {
        window.addEventListener("arjs-nft-loaded", (event) => {
            console.log(event);
            const camera = document.querySelector('[camera]');
            const marker = document.querySelector('a-nft');
            let check

            marker.addEventListener("markerFound", (event) => {
                console.log("event", event);
            });
            marker.addEventListener('markerLost', () => {
                console.log("clear");
            })
        });
    }, [])

    useEffect(() => {


    }, [])



    return (
        <div className="Sons">
            <div>
                <h1>Sons des tableaux</h1>
                <div className="arjs-loader">
                    <div>Loading, please wait...</div>
                </div>

                <a-scene
                    vr-mode-ui="enabled: false;"
                    renderer="logarithmicDepthBuffer: true;"
                    embedded
                    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
                >
                    <a-nft
                        type="nft"
                        url="assets/nft/rousseau"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance=".01"
                        smoothThreshold="5"
                        emitevents="true"
                    >
                        <a-entity
                            gltf-model=""
                            scale="5 5 5"
                            position="150 300 -100"
                        >
                        </a-entity>
                    </a-nft>
                    <a-entity camera></a-entity>
                </a-scene>

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
                {isRecup && <Recup />}
                {isRendre && <Rendre />}
                <div>
                    <button onClick={handleRecup} style={{ marginRight: 10 }}>Récupérer un son</button>
                    <button onClick={handleRendre}>Rendre un son</button>
                </div>
            </div>
        </div >
    )
}

export default Sons
