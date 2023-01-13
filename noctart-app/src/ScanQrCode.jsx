import React, { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import ScanDragSvg from "./components/svg/ScanDragSvg";

export const ScanQrCode = ({ setState, setPainting }) => {
  const [result, setResult] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [resolved, setResolved] = useState(false);

  const searchedPaintings = [
    "Bouquet de tulipes",
    "Fleurs dans un vase",
    "Bouquet dans une loge",
  ];

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
    constraints: {
      video: { facingMode: "environment" },
      audio: false,
    },
  });

  const handleTap = () => {
    setPainting(result);
    setTimeout(() => {
      setState("found");
    }, 500);
  };

  useEffect(() => {
    if (result) {
      if (searchedPaintings.includes(result)) {
        setIsFound(true);
      } else {
        setIsFound(false);
      }
    }
  }, [result]);

  return (
    <div style={{ height: "72vh", width: "100vw", position: "relative" }}>
      <video ref={ref} className="scanVideo" />

      {result ? (
        <>
          {isFound && !resolved ? (
            <div
              onClick={handleTap}
              className="scanTouchButton"
              style={{ top: "30vh" }}
            >
              <ScanDragSvg />
            </div>
          ) : (
            <p style={{ color: "white" }}>Ce n'est pas la bonne peinture</p>
          )}
        </>
      ) : null}
    </div>
  );
};
