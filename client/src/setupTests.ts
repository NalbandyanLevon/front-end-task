import "@testing-library/jest-dom";

const originalError = console.error;
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation((...args) => {
    if (typeof args[0] === "string" && args[0].includes("act(...)")) {
      return;
    }
    originalError(...args);
  });
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});
