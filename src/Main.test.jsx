import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Main Application Render", () => {
  test("renders the App component without crashing", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText(/My Music Player/i)).toBeInTheDocument();
  });
});

