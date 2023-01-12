import React from "react";

export const LineDot = ({ dot }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "100%",
          width: 1,
          backgroundColor: "#F2F2F2",
          position: "relative",
        }}
      />

      {dot && (
        <div
          style={{
            position: "absolute",
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#C3C4C4",
            bottom: 90,
          }}
        />
      )}
    </div>
  );
};
