import React from "react";

const Status = ({ currentTrack, isPlaying }) => {
  if (!currentTrack) {
    return <p>Select a track to play</p>;
  }

  return (
    <p>
      {isPlaying
        ? `🎵 Playing: ${currentTrack.title || currentTrack.episodeTitle}`
        : "⏸ Paused"}
    </p>
  );
};

export default Status;
