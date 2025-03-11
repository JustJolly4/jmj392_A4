import React, { useState, useEffect } from "react";
import Playlist from "./Playlist.jsx";
import Song from "./Song.jsx";
import Podcast from "./Podcast.jsx";
import Status from "./Status.jsx";
import Controls from "./Controls.jsx";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Fetch data using fetch()
  useEffect(() => {
    fetch("/audio.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Playlist Data:", data);
        setPlaylist(data);
      })
      .catch((error) => {
        console.error("❌ Error fetching playlist:", error);
      });
  }, []);

  // ✅ Track Controls
  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleShuffle = () => {
    if (playlist.length === 0) return;
    setPlaylist([...playlist].sort(() => Math.random() - 0.5));
  };

  const handlePrev = () => {
    if (playlist.length === 0 || currentTrack === null) return;
    const currentIndex = playlist.findIndex(track => track.title === currentTrack.title);
    const newIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentTrack(playlist[newIndex]);
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (playlist.length === 0 || currentTrack === null) return;
    const currentIndex = playlist.findIndex(track => track.title === currentTrack.title);
    const newIndex = currentIndex === playlist.length - 1 ? 0 : currentIndex + 1;
    setCurrentTrack(playlist[newIndex]);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // ✅ Filter only songs for Playlist & Songs section
  const songs = Array.isArray(playlist) ? playlist.filter(item => item.artist) : [];
  const podcasts = Array.isArray(playlist) ? playlist.filter(item => item.episodeTitle || item.podcast) : [];
  

  return (
    <div className="App">
      {/* 🎵 My Music Player Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ textDecoration: "underline", letterSpacing: "2px", color: "#8282f2" }}>
          My Music Player
        </h1>

        {/* 🎶 Status & Controls */}
        <Status currentTrack={currentTrack} isPlaying={isPlaying} />
        <Controls
          onShuffle={handleShuffle}
          onPrev={handlePrev}
          onNext={handleNext}
          onPlayPause={handlePlayPause}
          isPlaying={isPlaying}
        />
      </div>

      {/* ✅ Use Flexbox to Place Playlist, Songs, and Podcasts Inside My Music Player */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          alignItems: "flex-start",
          padding: "10px",
          backgroundColor: "#E0D6FF",
          borderRadius: "10px",
        }}
      >
        {/* 🎼 Playlist Section (Only Songs) */}
        <div style={{ flex: "1", padding: "10px" }}>
          <h2 style={{ color: "#4A4A8A", textAlign: "center" }}>🎼 Playlist</h2>
          <Playlist playlist={songs} onTrackClick={handleTrackClick} />
        </div>

        {/* 🎵 Songs Section (Only Songs) */}
        <div style={{ flex: "1", padding: "10px" }}>
          <h2 style={{ color: "#4A4A8A", textAlign: "center" }}>🎵 Songs</h2>
          {songs.length === 0 ? (
            <p>No songs available</p>
          ) : (
            songs.map((item, index) => (
              <div
                key={index}
                onDoubleClick={() => handleTrackClick(item)}
                style={{
                  padding: "10px",
                  backgroundColor: "#b4a7f2",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <Song {...item} />
              </div>
            ))
          )}
        </div>

       {/* 🎙 Podcasts Section (Only Podcasts) */}
<div style={{ flex: "1", padding: "10px" }}>
  <h2 style={{ color: "#4A4A8A", textAlign: "center" }}>🎙 Podcasts</h2>
  <Podcast podcasts={podcasts} onClick={handleTrackClick} />

        </div>
      </div>
    </div>
  );
}

export default App;
