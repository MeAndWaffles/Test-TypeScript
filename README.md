# Test-TypeScript

Test-TypeScript is a TypeScript project for testing web applications. It includes a simple test suite and an example test case.

## Technologies

This project uses the following technologies:

- TypeScript
- Node.js
- Visual Studio Code
- Playwright

## Installation
To run this project, you need to have Node.js and Visual Studio Code installed on your computer. If you don't have them installed, you can download and install them from the following links:

- Node.js: https://nodejs.org/en/download/
- Visual Studio Code: https://code.visualstudio.com/download
- Playwright: https://playwright.dev/docs/intro

After installing Node.js, Visual Studio Code, and Playwright, you can install the project's dependencies by running the following command in your terminal:

```
npm install

```

## Usage

1. To run the project, you can use the following command in your terminal:

```
npm start
```

This will compile and run the TypeScript code using the Playwright library with the Page Object pattern. The tests run on parallel with 2 instances of Playwright, on Chrome, Firefox, and WebKit browsers. To modify which browsers are used and how the tests are executed, you can update the configuration file at playwright.config.ts.

2. To run the tests for this project, you can use the following command in your terminal:

```
npm test
```

This will run the tests and show the test results in your terminal.

If you need to change how and on what they are launched, open the playwright.config.ts file and change the relevant fields.

## Dependencies

This project has the following dependencies:

- TypeScript
- Node.js
- Visual Studio Code
- Playwright
- @playwright/test
- @types/node

If you need to change or add something, use package.json and the command:

```
npm install
```
