import React from "react";
import Song from "./Song";

const Playlist = ({ playlist, onTrackClick }) => {
  if (!playlist || playlist.length === 0) {
    return <p>Loading playlist...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* ✅ Add the Playlist Title */}
      <h2 style={{ color: "#4A4A8A", textAlign: "center" }}>🎼 Playlist</h2>

      {playlist.map((item, index) => (
        <div
          key={index}
          onDoubleClick={() => onTrackClick(item)}
          style={{
            padding: "10px",
            backgroundColor: "#b4a7f2",
            borderRadius: "8px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        ><Song {...item} onClick={() => onTrackClick(item)} />

        </div>
      ))}
    </div>
  );
};

export default Playlist;

