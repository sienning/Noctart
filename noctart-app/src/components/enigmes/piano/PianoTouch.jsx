import { useEffect, useState } from "react";

import "./piano.css";

const PianoTouch = ({ setIsPlayingEnigma, setState, setResolved }) => {
  const [level, setLevel] = useState(0); // Niveau du jeu
  const [index, setIndex] = useState(0); // Note dans lequel le joueur est
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [isPlayerWinning, setIsPlayerWinning] = useState(false);
  const [endGame, setEndGame] = useState(false);

  /**
   * Notes du morceau
   */
  const track = [
    {
      type: "black",
      note: "Ad4",
    },
    {
      type: "white",
      note: "G5",
    },
    {
      type: "white",
      note: "F5",
    },
    {
      type: "white",
      note: "G5",
    },
    {
      type: "white",
      note: "F5",
    },
    {
      type: "black",
      note: "Dd5",
    },
  ];
  /**
   * Notes de toutes les touches du piano
   */
  const pianoNotes = [
    {
      type: "white",
      note: "F4",
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
  ];

  /**
   * Démarre le jeu
   */
  const handleLetsPlay = () => {
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

    setIsPlaying(true);
    modelPlay(level);
  };

  /**
   * Lorsqu'une touche du piano est cliquée
   * @param {Object} note {note: {String}<Nom-de-la-note>, type: {String}<Couleur-de-la-touche>}
   */
  const handlePlay = (note, player) => {
    let tilePlayed = document.getElementById(note.note);
    const notePlay = new Audio(`/assets/piano-sounds/${note.note}.wav`);
    // On joue la note (son)
    notePlay.play();

    if (player === "model") {
      tilePlayed.classList.add("active");
      setTimeout(() => {
        tilePlayed.classList.remove("active");
      }, 4000);
    } else {
      // Si c'est le joueur
      if (track[index].note === note.note) {
        // Si c'est la bonne note
        tilePlayed.classList.add("ok");
        if (index < level) {
          setIndex(index + 1);
        } else {
          setTimeout(() => {
            setLevel(level + 1);
            setIndex(0);
            setIsPlayerPlaying(false);
          }, 4000);
        }
        setTimeout(() => {
          tilePlayed.classList.remove("ok");
        }, 4000);
      } else {
        // Si c'est la mauvaise note, le jeu est arrêté
        tilePlayed.classList.add("ko");
        setTimeout(() => {
          tilePlayed.classList.remove("ko");
          setIsPlayerPlaying(false);
          setIsPlaying(false);
          setIndex(0);
          setLevel(0);
        }, 4000);
      }
    }
  };

  /**
   * Lorsque le modèle est joué pour que le joueur reproduise
   * @param {Number} level Niveau du jeu de 0 à 5 (car 6 notes)
   */
  function modelPlay(level) {
    setIsPlayerPlaying(false);

    track.forEach((note, i) => {
      if (i <= level) {
        console.log("model play ", note);
        if (i === 0) {
          handlePlay(note, "model");
        } else {
          setTimeout(() => {
            handlePlay(note, "model");
          }, 4000 * i);
        }
      }
    });
    setTimeout(() => {
      setIsPlayerPlaying(true);
    }, 4000 * (level + 1));
  }

  useEffect(() => {
    if (level > 0 && level < 6) {
      console.log("useeffect");
      modelPlay(level);
    }
    if (level > 5) {
      setIsPlayerWinning(true);
      setEndGame(true);
    }
  }, [level]);

  const handleNext = () => {
    setIsPlayingEnigma(false);
    setResolved(true);
    setState("infos");
  };

  return (
    <div className="PianoTouch">
      {!isPlaying && (
        <div
          className="button-play"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            Rejouez les notes en surbrillance pour composer une mélodie finale{" "}
            <br></br>
            qui aidera les jeunes filles à déchiffrer la partition devant elles.
          </div>

          <button onClick={handleLetsPlay} className="playButtonPiano">
            JOUER
          </button>
        </div>
      )}
      {isPlayerWinning && endGame && (
        <div
          className="button-play"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "400px" }}>
            Bravo ! <br />
            Vous venez de jouer les premières notes de Nocturne in E Flat Major
            (Op. 9 No. 2) de Chopin !
          </div>
          <button onClick={handleNext} className="nextButtonPiano">
            CONTINUER
          </button>
        </div>
      )}
      <div className="info-piano">
        {isPlaying &&
          !endGame &&
          (isPlayerPlaying ? (
            <span>À vous ! niveau {level}</span>
          ) : (
            <span>Écoutez attentivement ... niveau {level}</span>
          ))}
      </div>
      <ul className="piano-tiles">
        {pianoNotes.map((note, i) => (
          <li
            id={note.note}
            className={"tile " + note.type + " " + note.note}
            onClick={() => handlePlay(note, "player")}
            key={i}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PianoTouch;
