export default {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"], // 👈 Add this line
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
