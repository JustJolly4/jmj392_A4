import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";  // ✅ Import for toBeInTheDocument()
import Podcast from "./Podcast";

describe("Podcast Component", () => {
  
  test("renders correctly with full data", () => {
    const mockOnClick = jest.fn();

    render(<Podcast podcasts={[
      { episode: 360, episodeTitle: "Switched at Birth" }
    ]} onClick={mockOnClick} />);


    expect(screen.getByText(/Switched at Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Episode\s*360/i)).toBeInTheDocument();  // Ensure episode number appears
  });

  test("renders correctly without season data", () => {
    const mockOnClick = jest.fn();

    render(<Podcast podcasts={[
      { episode: 1368, episodeTitle: "The Joe Rogan Experience- #1368: Edward Snowden" }
    ]} onClick={mockOnClick} />);


    expect(screen.getByText(/The Joe Rogan Experience/i)).toBeInTheDocument(); 
    expect(screen.getAllByText(/1368/i)[0]).toBeInTheDocument();
  });

  test("handles missing episode number", () => {
    const mockOnClick = jest.fn();

    render(<Podcast podcasts={[
      { podcast: "The Moth", episodeTitle: "The Moth Presents John Turturro" }
    ]} onClick={mockOnClick} />);


    expect(screen.getByText(/John Turturro/i)).toBeInTheDocument(); // More flexible title check
  });

  test("triggers onClick when double-clicked", () => {
    const mockOnClick = jest.fn();

    render(<Podcast podcasts={[
      { episode: 5, season: 1, episodeTitle: "Route Talk" }
    ]} onClick={mockOnClick} />);


    const podcastElement = screen.getByText(/Route Talk/i).closest("div");
    expect(within(podcastElement).getByText(/Season\s*1\s*,\s*Episode\s*5/i)).toBeInTheDocument();
    
    fireEvent.doubleClick(podcastElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

});
