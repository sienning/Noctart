import React, { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { Data } from "./components/enigmes/data/Data";

import useWindowDimensions from "./utils/hooks/getWindowDimensions";

export const ScanQrCode = () => {
  const [result, setResult] = useState(null);
  const [found, setFound] = useState(null);

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
    constraints: {
      video: { facingMode: "environment" },
      audio: false,
    },
  });

  const { height, width } = useWindowDimensions();

  const searchedPainting = "La Maison Bernot";

  useEffect(() => {
    if (result) {
      if (result === searchedPainting) {
        setFound(true);
      } else {
        setFound(false);
      }
    }
  }, [result]);

  return (
    <div height={height} width={width}>
      <video ref={ref} width={"100%"} />

      {result ? (
        found ? (
          <p>Peinture trouvée</p>
        ) : (
          <p>Ce n'est pas la bonne peinture</p>
        )
      ) : null}
    </div>
  );
};
