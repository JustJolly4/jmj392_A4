import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Song from "./Song";

describe("Song Component", () => {
  test("renders correctly with valid props", () => {
    const mockOnClick = jest.fn();
    render(<Song title="Billie Jean" artist="Michael Jackson" year={1983} onClick={mockOnClick} />);
    
    expect(screen.getByText("Billie Jean")).toBeInTheDocument();
    expect(screen.getByText("Michael Jackson (1983)")).toBeInTheDocument();
  });

  test("handles missing year gracefully", () => {
    const mockOnClick = jest.fn();
    render(<Song title="Smells Like Teen Spirit" artist="Nirvana" onClick={mockOnClick} />);
    
    expect(screen.getByText("Smells Like Teen Spirit")).toBeInTheDocument();
    expect(screen.getByText("Nirvana ()")).toBeInTheDocument();
  });

  test("handles missing title", () => {
    const mockOnClick = jest.fn();
    render(<Song artist="Nirvana" year={1991} onClick={mockOnClick} />);
    
    expect(screen.queryByText("Nirvana (1991)")).toBeInTheDocument();
  });

  test("handles invalid year type (string instead of number)", () => {
    const mockOnClick = jest.fn();
    render(<Song title="Never Gonna Give You Up" artist="Rick Astley" year="invalidYear" onClick={mockOnClick} />);
    
    expect(screen.getByText("Never Gonna Give You Up")).toBeInTheDocument();
    expect(screen.getByText("Rick Astley (invalidYear)")).toBeInTheDocument();
  });

  test("triggers onClick when double-clicked", () => {
    const mockOnClick = jest.fn();
    render(<Song title="Wellerman" artist="Nathan Evans" year={2021} onClick={mockOnClick} />);
    
    const songElement = screen.getByText("Wellerman");
    fireEvent.doubleClick(songElement);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
