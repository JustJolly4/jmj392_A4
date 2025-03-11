import React from "react";
import { render, screen, act } from "@testing-library/react";  
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders My Music Player title", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText(/My Music Player/i)).toBeInTheDocument();
  });

  test("displays Loading message before data is fetched", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText(/Loading playlist.../i)).toBeInTheDocument();
  });

  test("renders Playlist, Songs, and Podcasts components", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getAllByText(/Playlist/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Songs/i).length).toBeGreaterThan(0); // ✅ Fix here
    expect(screen.getAllByText(/Podcasts/i).length).toBeGreaterThan(0); // ✅ Fix here
  });
});
