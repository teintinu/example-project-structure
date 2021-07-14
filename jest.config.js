const { pathsToModuleNameMapper } = require('ts-jest/utils')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.test')

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })

module.exports = {
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['dist'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  testRegex: '(\\.(test|spec|steps))\\.(ts|tsx)$',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  moduleNameMapper,
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest'
  },
  coverageReporters: [
    'text',
    'html',
    'cobertura',
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      functions: 90,
      branches: 90
    }
  }
}
