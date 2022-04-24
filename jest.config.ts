const config = {
  verbose: true,
  preset: 'vite-jest',
  moduleNameMapper: {
    react: '<rootDir>/node_modules/react',
    '@constants': '<rootDir>/src/constants',
    '@hooks': '<rootDir>/src/hooks',
    '@types': '<rootDir>/src/types'
  }
};
export default config;
