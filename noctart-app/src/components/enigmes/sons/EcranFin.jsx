import React from "react";

export default function EcranFin() {
    return (
        <div style={{ transform: "scale(1.5)" }}>
            <img style={{ width: "50%", height: "80%" }}  src="/assets/tableau-rousseau.png" />
            <div style={{ margin: "auto", width: "150px" }}>
                <p style={{ fontSize: '10px', color: "white" }}>
                    Le Douanier était connu pour ne peindre que le week-end, il dépeignait un univers entre voyage et nature.
                    Cela peut paraitre étonnant car sachez-le, il n’a jamais voyagé de sa vie !
                    Impressionnant non ?!
                </p>
                <button>
                    Continuer
                </button>
            </div>
        </div>
    );
}
