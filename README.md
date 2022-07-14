## Getting Started
npx create-next-app app-name --ts

## Jest Installation
˜˜˜
npm install --save-dev jest typescript ts-jest @types/jest
˜˜˜
## Jest Configuration with TS Support

[Jest TS] (https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)

### NPM
˜˜˜
npx ts-jest config:init
˜˜˜


### package.json test script
```
"test": "jest --coverage"
```

### YARN
˜˜˜
yarn ts-jest config:init
˜˜˜

### Install depending packages
```
npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/dom @testing-library/jest-dom
```