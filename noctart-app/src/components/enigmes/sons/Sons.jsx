import { useState } from "react";
import Recup from "./Recup";
import Rendre from "./Rendre";

const Sons = () => {
    const [isRecup, setIsRecup] = useState(false);
    const [isRendre, setIsRendre] = useState(false);

    const handleRecup = () => {
        setIsRecup(true)
        setIsRendre(false)
    }

    const handleRendre = () => {
        setIsRecup(false)
        setIsRendre(true)
    }

    return (
        <div className="Sons">
            <div>
                <h1>Sons des tableaux</h1>
                {
                    isRecup && <Recup />
                }
                {
                    isRendre && <Rendre />
                }
                <div>
                    <button onClick={handleRecup} style={{ marginRight: 10 }}>Récupérer un son</button>
                    <button onClick={handleRendre}>Rendre un son</button>
                </div>
            </div>
        </div>
    )
}

export default Sons
