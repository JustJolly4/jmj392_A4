import React from 'react';

const Song = ({ title, artist, year, onClick = () => {} }) => {
  return (
    <div
      onDoubleClick={() => {
        console.log(`🎵 Song clicked: ${title}`); // ✅ Debugging
        onClick(); // ✅ Calls function if provided, avoids error if missing
      }}
      style={{
        background: "#b4a7f2",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <p>{artist} ({year})</p>
    </div>
  );
};


export default Song;
