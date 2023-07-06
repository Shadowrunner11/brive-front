const config = {
  rootDir: process.cwd(),
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    ".*\\.(tsx|ts?)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default config;
