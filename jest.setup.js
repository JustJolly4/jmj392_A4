// Mock fetch to prevent Jest from failing due to API calls
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]), // Returns an empty array as mock data
    })
  );
  