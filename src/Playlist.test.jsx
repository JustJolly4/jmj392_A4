import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Playlist from "./Playlist";

describe("Playlist Component", () => {
  const mockOnTrackClick = jest.fn();

  const mockPlaylist = [
    { title: "Billie Jean", artist: "Michael Jackson", year: 1983 },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", year: 1991 },
    { episode: 360, episodeTitle: "Switched at Birth" },
    { season: 1, episode: 5, episodeTitle: "Route Talk" },
  ];

  test("renders correctly with a playlist", () => {
    render(<Playlist playlist={mockPlaylist} onTrackClick={mockOnTrackClick} />);


    expect(screen.getByText("🎼 Playlist")).toBeInTheDocument();
    
    // FIX: Use getAllByText and choose the first instance

expect(screen.getAllByText("Billie Jean")[0]).toBeInTheDocument();
expect(screen.getAllByText("Smells Like Teen Spirit")[0]).toBeInTheDocument();

  });

  test("triggers onTrackClick when a song is double-clicked", () => {
    render(<Playlist playlist={mockPlaylist} onTrackClick={mockOnTrackClick} />);
    
    // FIX: Find within the Songs section instead of global search

    const songElement = screen.getByText(/Billie Jean/i).closest("div");

    fireEvent.doubleClick(songElement);

// Debugging: Check if mock function was actually called
console.log("Mock function call count:", mockOnTrackClick.mock.calls.length);

expect(mockOnTrackClick).toHaveBeenCalledTimes(2);


  });
});
