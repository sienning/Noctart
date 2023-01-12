import React from "react";

export const LineProgression = ({ inProgress, completed }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100px",
      }}
    >
      <div
        style={{
          height: "50%",
          width: 2.5,
          backgroundColor: inProgress
            ? "#ADA9AA"
            : completed
            ? "#FC8C1E"
            : "#D4D4D4",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      />

      <div
        style={{
          height: "50%",
          width: 2.5,
          backgroundColor: completed ? "#FC8C1E" : "#D4D4D4",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
    </div>
  );
};
