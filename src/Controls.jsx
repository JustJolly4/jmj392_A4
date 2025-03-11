import React from "react";

const Controls = ({ onShuffle, onPrev, onNext, onPlayPause, isPlaying }) => {
  return (
    <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "10px" }}>
      <button onClick={onShuffle} style={buttonStyle}>Shuffle</button>
      <button onClick={onPrev} style={buttonStyle}>Prev</button>
      <button onClick={onPlayPause} style={buttonStyle}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={onNext} style={buttonStyle}>Next</button>
    </div>
  );
};

// Button styling for consistency
const buttonStyle = {
  backgroundColor: "#d6b4fc",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Controls;
