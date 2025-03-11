import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Controls from "./Controls";

describe("Controls component", () => {
  test("renders all buttons correctly", () => {
    render(
      <Controls
        onShuffle={jest.fn()}
        onPrev={jest.fn()}
        onNext={jest.fn()}
        onPlayPause={jest.fn()}
        isPlaying={false}
      />
    );
    
    // Check if all buttons are rendered correctly
    expect(screen.getByText("Shuffle")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Play")).toBeInTheDocument(); // Because isPlaying is false
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("calls onShuffle when shuffle button is clicked", () => {
    const mockShuffle = jest.fn();
    render(
      <Controls
        onShuffle={mockShuffle}
        onPrev={jest.fn()}
        onNext={jest.fn()}
        onPlayPause={jest.fn()}
        isPlaying={false}
      />
    );
    
    fireEvent.click(screen.getByText("Shuffle"));
    expect(mockShuffle).toHaveBeenCalledTimes(1);
  });

  test("calls onPrev when prev button is clicked", () => {
    const mockPrev = jest.fn();
    render(
      <Controls
        onShuffle={jest.fn()}
        onPrev={mockPrev}
        onNext={jest.fn()}
        onPlayPause={jest.fn()}
        isPlaying={false}
      />
    );
    
    fireEvent.click(screen.getByText("Prev"));
    expect(mockPrev).toHaveBeenCalledTimes(1);
  });

  test("calls onNext when next button is clicked", () => {
    const mockNext = jest.fn();
    render(
      <Controls
        onShuffle={jest.fn()}
        onPrev={jest.fn()}
        onNext={mockNext}
        onPlayPause={jest.fn()}
        isPlaying={false}
      />
    );
    
    fireEvent.click(screen.getByText("Next"));
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  test("calls onPlayPause and changes button text when clicked", () => {
    const mockPlayPause = jest.fn();
    
    const { rerender } = render(
      <Controls
        onShuffle={jest.fn()}
        onPrev={jest.fn()}
        onNext={jest.fn()}
        onPlayPause={mockPlayPause}
        isPlaying={false}
      />
    );
    
    // Test that "Play" button is rendered when isPlaying is false
    expect(screen.getByText("Play")).toBeInTheDocument();
    
    fireEvent.click(screen.getByText("Play"));
    expect(mockPlayPause).toHaveBeenCalledTimes(1);
    
    // Now test with isPlaying true
    rerender(
      <Controls
        onShuffle={jest.fn()}
        onPrev={jest.fn()}
        onNext={jest.fn()}
        onPlayPause={mockPlayPause}
        isPlaying={true}
      />
    );
    
    // Test that "Pause" button is rendered when isPlaying is true
    expect(screen.getByText("Pause")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Pause"));
    expect(mockPlayPause).toHaveBeenCalledTimes(2);
  });
});
