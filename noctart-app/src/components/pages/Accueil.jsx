import {
    Link
} from "react-router-dom";

const Accueil = () => {

    return (
        <div className="Accueil">
            <div>
                <h1>Accueil</h1>
                <Link style={{ marginRight: 10 }} to="/">Accueil</Link>
                <Link style={{ marginRight: 10 }} to="/enigme/1">Enigme 1</Link>
                <Link style={{ marginRight: 10 }} to="/enigme/2">Enigme 2</Link>
                <Link to="/enigme/3">Enigme 3</Link>
            </div>
        </div>
    )
}

export default Accueil
