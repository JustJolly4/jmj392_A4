import React from 'react';

const Podcast = ({ podcasts = [], onClick }) => {  
  console.log("Rendering Podcast Component. Podcasts received:", podcasts);

  if (!podcasts || podcasts.length === 0) {
    return <p>No podcasts available</p>; 
  }

  return (
    <div style={{ 
      padding: "10px", 
      backgroundColor: "#e0d6ff", 
      borderRadius: "8px", 
      textAlign: "center"
    }}>
      <h2 style={{ color: "#4a4a8a" }}>🎙 Podcasts</h2>
      
      {podcasts.map((podcast, index) => (
        <div
          key={podcast.id || index}  // ✅ Unique key for each podcast
          onDoubleClick={() => onClick && onClick(podcast)}
          style={{
            background: "#b4a7f2",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px",
            fontSize: "14px",
            cursor: "pointer",
            textAlign: "center",
          }}
        ><h3>{podcast.episodeTitle ? podcast.episodeTitle : "Unknown Podcast"}</h3>

          {podcast.season !== undefined && podcast.episode !== undefined ? (
            <p>Season {podcast.season}, Episode {podcast.episode}</p>
          ) : (
            podcast.episode !== undefined ? <p>Episode {podcast.episode}</p> : null
          )}
          {podcast.year && <p>Year: {podcast.year}</p>}
        </div>
      ))}
    </div>
  );
};

export default Podcast;
