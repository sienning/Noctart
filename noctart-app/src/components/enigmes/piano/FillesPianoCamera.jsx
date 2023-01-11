import { useEffect, useState } from "react";
import PianoTouch from "./PianoTouch";

const FillesPianoCamera = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const handleTap = () => {
        console.log("On joue");
        setIsPlaying(true)
    }

    useEffect(() => {
        if (!isPlaying) {
            window.addEventListener("arjs-nft-loaded", (event) => {
                console.log(event);
                const marker = document.querySelector('a-nft');

                marker.addEventListener("markerFound", (event) => {
                    console.log("event", event);
                    setIsFound(true)
                });
                marker.addEventListener('markerLost', () => {
                    console.log("marqueur perdu");
                    setIsFound(false)
                })
            });
        }
    }, [isPlaying])


    return (
        <div className="PianoCamera">
            <div>

                {
                    isPlaying &&
                    <div style={{ width: "100%", height: "100%", background: "white" }}>
                        <PianoTouch/>
                    </div>
                }

                {
                    !isPlaying &&
                    <div id="camera-ar">
                        <div className="arjs-loader">
                            <div>Chargement, patientez...</div>
                        </div>

                        <a-scene
                            vr-mode-ui="enabled: false;"
                            renderer="logarithmicDepthBuffer: true;"
                            embedded
                            arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
                        >
                            <a-nft
                                type="nft"
                                url="assets/nft/renoir/renoir"
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
                    </div>
                }

                {
                    isFound &&
                    <div onClick={handleTap} className="play-button">
                        <img alt="tap-to-play" src="/assets/icons/tap.png" />
                    </div>
                }

            </div>
        </div >
    )
}

export default FillesPianoCamera
