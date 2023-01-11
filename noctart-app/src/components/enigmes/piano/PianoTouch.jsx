import { useState } from "react"

const PianoTouch = () => {
    const [playerTrack, setPlayerTrack] = useState([]);
    const [index, setIndex] = useState([]);

    const track = [
        {
            type: "black",
            note: "Ad4"
        },
        {
            type: "white",
            note: "G5"
        },
        {
            type: "white",
            note: "F5"
        },
        {
            type: "white",
            note: "G5"
        },
        {
            type: "white",
            note: "F5"
        },
        {
            type: "black",
            note: "Dd5"
        }
    ]

    const handlePlay = (note) => {
        const notePlay = new Audio(`/assets/piano-sounds/${note.note}.wav`);
        notePlay.play();
    }

    const pianoNotes = [
        {
            type: "white",
            note: "F4"
        },
        {
            type: "black",
            note: "Fd4",
        },
        {
            type: "white",
            note: "G4",
        },
        {
            type: "black",
            note: "Gd4",
        },
        {
            type: "white",
            note: "A4",
        },
        {
            type: "black",
            note: "Ad4",
        },
        {
            type: "white",
            note: "B4",
        },
        {
            type: "white",
            note: "C5",
        },
        {
            type: "black",
            note: "Cd5",
        },
        {
            type: "white",
            note: "D5",
        },
        {
            type: "black",
            note: "Dd5",
        },
        {
            type: "white",
            note: "E5",
        },
        {
            type: "white",
            note: "F5",
        },
        {
            type: "black",
            note: "Fd5",
        },
        {
            type: "white",
            note: "G5",
        },
        {
            type: "black",
            note: "Gd5",
        },
        {
            type: "white",
            note: "A5",
        },
        {
            type: "black",
            note: "Ad5",
        },
        {
            type: "white",
            note: "B5",
        },

    ]

    return (
        <div className="PianoTouch">
            <ul className="piano-tiles">
                {
                    pianoNotes.map((note, i) => (
                        <li className={"tile " + note.type + " " + note.note} onClick={() => handlePlay(note)} key={i} ></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PianoTouch
