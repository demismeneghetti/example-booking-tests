
<h1 align="center"> 
    Example Booking Tests Using Webdriver.IO.
</h1>

<p align="justify"> 
A search on the Booking.com website was proposed for this challenge, using the city of Porto, check-in for the 1st day of the next month, and check-out for the 7th day of the next month. 

After consulting the automation, it must log the number of properties and list all the properties presented on the first page.

Below we have an index with all the necessary steps to read, execute and maintain the code.
</p>

<br>

- [🖐🏻 Approach](#-approach)
  - [💾 Dependecies](#-dependecies)
- [📁 How to access the project](#-how-to-access-the-project)
- [🛠️ Open and run the project](#️-open-and-run-the-project)
  - [🛥 Example to select browsers:](#-example-to-select-browsers)
  - [🔎 Inspection Code](#-inspection-code)
  - [✅ Test Execution](#-test-execution)

<br>

<p align="center">
<img src="docs/Kapture%202022-11-21%20at%2013.41.46.gif"/>
</p>

<br>

## 🖐🏻 Approach

I preferred using the best practices and approaches for in the future we have easy maintenance and the best project evolution.

For this project, I decided to use the WebdriverIO framework because I haven't experience with Cypress. For more details about WebdriveIO, please access the [documentation](https://webdriver.io/).

### 💾 Dependecies
- Node
- WebdriverIO
- JDK11 - [Download](https://www.oracle.com/pt/java/technologies/javase/jdk11-archive-downloads.html)

<br>

## 📁 How to access the project
To clone this project click [here](https://github.com/demismeneghetti/booking-tests.git)

To install all dependencies and run, just execute the below command in the root folder:
```sh
npm install
```

<br>

## 🛠️ Open and run the project

This project is able to run all tests in Google Chrome Browser, if you like to perform the tests in another browser, feel free to change the [configuration file](wdio.conf.js#L50). 

<br>

### 🛥 Example to select browsers:

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

- For multiple Browser at the same time

```js
capabilities: [
{
    maxInstances: 1,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
  {
    maxInstances: 1,
    browserName: "firefox",
    acceptInsecureCerts: true,
  }
]
```

<br>

### 🔎 Inspection Code
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

<br>

### ✅ Test Execution

```sh
npm test
```
