import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensuring global styles are loaded

// ✅ Enable or Disable StrictMode for debugging
const enableStrictMode = true; // Change to false if needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  enableStrictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
