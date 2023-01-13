import React, { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { Data } from "./components/enigmes/data/Data";
import ScanDragSvg from "./components/svg/ScanDragSvg";

export const ScanQrCode = () => {
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

  const handleTap = () => {};

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
        <div>
          {isFound && !resolved ? (
            <div onClick={handleTap} className="scanTouchButton">
              <ScanDragSvg />
            </div>
          ) : (
            <p style={{ color: "white" }}>Ce n'est pas la bonne peinture</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
