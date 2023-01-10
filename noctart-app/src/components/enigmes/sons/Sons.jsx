
const Sons = () => {
    const handleRecup = () => {
        console.log("handleRecup");        
    }

    const handleRendre = () => {
        console.log("handleRendre");
    }

    return (
        <div className="Sons">
            <div>
                <h1>Sons des tableaux</h1>
                <div>
                    <button onClick={handleRecup} style={{ marginRight: 10 }}>Récupérer un son</button>
                    <button onClick={handleRendre}>Rendre un son</button>
                </div>
            </div>
        </div>
    )
}

export default Sons
