# Booking Tests for D.E.U.S. Challenge

TBD

- [💾 Approach](#-approach)
- [📁 How to access the project](#-how-to-access-the-project)
- [🛠️ Open and run the project](#️-open-and-run-the-project)
  - [Test Execution](#test-execution)

## 💾 Approach

I preferred using the best practices and approaches for in the future we have easy maintenance and evolution.

For this project, I decided to use the WebdriverIO framework... for more details, please access the [documentation](https://webdriver.io/).

## 📁 How to access the project
For clonate this project click ![here](https://github.com/demismeneghetti/booking-tests.git)

## 🛠️ Open and run the project

This project is able to ran all tests in Google Chrome Browser, if you like to performing the tests in another browser, fell free to change the [configuration file](wdio.conf.js#L50). Example:

- Google Chrome

```js
capabilities: [
  {
    maxInstances: 1,
    browserName: "chrome",
    acceptInsecureCerts: true,
  }
]
```

- Mozilla Firefox

```js
capabilities: [
  {
    maxInstances: 1,
    browserName: "firefox",
    acceptInsecureCerts: true,
  }
]
```

- Apple Safari

```js
capabilities: [
  {
    maxInstances: 1,
    browserName: "safari",
    acceptInsecureCerts: true,
  }
]
```

> Remeber to enable the [Webdriver Support](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)

- Multiple Browser in the same time

```js
capabilities: [
{
    maxInstances: 1,
    browserName: "firefox",
    acceptInsecureCerts: true,
  },
  {
    maxInstances: 1,
    browserName: "firefox",
    acceptInsecureCerts: true,
  }
]
```

### Test Execution

TBD

```sh
npm test
```

### Inspection

- Lint

A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. Use the command below to verify this project:

```sh
npm run lint
```

> If you use the [Microsoft VSCODE](https://code.visualstudio.com/), the IDE accept the current configuration [file](.eslintrc).


- Audit
Submits all dependencies configured in this project to your default registry and asks for a report of known vulnerabilities.

```sh
npm audit
```

- Prettier

Keep the code with a default formatter pattern defined by the company, for this task use the command below to execute the [prettier](https://prettier.io):

```sh
npm run format
```
