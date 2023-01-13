import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

export default function EcranFin({
    setEnigmaOneSolved
}) {
    const navigate = useNavigate();
    return (
        <div
        >
            <img style={{ top: "70px", width: "100%", height: "80%" }} src="/assets/tableau-rousseau.png" />
            <div style={{ padding: "30px 50px", backgroundColor: "#3d3636", position: "absolute", margin: "auto", width: "150px", top: "300px", left: '50%', transform: "translate(-50%, 0)" }}>
                <p style={{ fontSize: '10px', color: "white" }}>
                    Le Douanier était connu pour ne peindre que le week-end, il dépeignait un univers entre voyage et nature.
                    Cela peut paraitre étonnant car sachez-le, il n’a jamais voyagé de sa vie !
                    Impressionnant non ?!
                </p>
                <button to="/enigme" onClick={() => {
                    setEnigmaOneSolved(true)
                    navigator.mediaDevices
                        .getUserMedia({ audio: false, video: true })
                        .then((mediaStream) => {
                            document.querySelector("video").srcObject = mediaStream;
                            const tracks = mediaStream.getTracks();
                            tracks[0].stop();
                        })
                        .finally(() => {
                            document.querySelector("video").remove();
                        });
                        navigate("/enigme")
                }
                } >
                    Continuer
                </button>
            </div>
        </div >
    );
}
