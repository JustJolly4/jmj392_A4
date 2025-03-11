import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Status from "./Status";


test("displays default message when no track is selected", () => {
  render(<Status currentTrack={null} isPlaying={false} />);
  expect(screen.getByText("Select a track to play")).toBeInTheDocument();
});