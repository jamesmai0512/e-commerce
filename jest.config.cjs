module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'path/to/your/tsconfig.json',
    },
  },
  preset: 'ts-jest',
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/index.{js,ts}',
    '!**/*.d.ts',
    '!**/.storybook/**',
    '!**/*.stories.{jsx,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/*.ts',
    '!<rootDir>/pages/**',
    '!<rootDir>/models/**',
    '!<rootDir>/themes/**',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test-file-stub',
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '/^(.*)$/': '<rootDir>/src/$1',
    '@/constants/(.*)': '<rootDir>/src/constants/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
  },
}
