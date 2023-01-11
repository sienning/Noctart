import { useEffect, useRef, useState } from "react";
import Recup from "./Recup";
import Rendre from "./Rendre";

const Sons = () => {
    const [isRecup, setIsRecup] = useState(false);
    const [isRendre, setIsRendre] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const handleRecup = () => {
        setIsRecup(true)
        setIsRendre(false)
    }

    const handleRendre = () => {
        setIsRecup(false)
        setIsRendre(true)
    }

    useEffect(() => {
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
    }, [])

    useEffect(() => {


    }, [])



    return (
        <div className="Sons">
            <div>
                <h1>Sons des tableaux</h1>
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
                        url="assets/nft/rousseau/rousseau"
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

                {
                    isFound &&
                    <div>TROUVÉ</div>
                }

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
