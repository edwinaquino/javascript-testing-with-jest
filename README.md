# JavaScript Testing with Jest

This is a simple JavaScript application to demonstrate the power of JavaScript testing with Jest.

## Getting Started

To get started, fork or clone this repository into your local environment.

### Prerequisites

To run this application, you will need node.js installed in your environment. You can download Node.js from the following link:

[Download Node.js](https://nodejs.org/en/download/)

### Installing

Once you have downloaded a copy of this repository into your environment with Node.js, open a terminal and execute the following commands to install the required dependencies:

```
npm init -y
```
a package.json file will be created. Open package.json with your favorite text editor and change the "test" value as the following:

```
"test": "jest --coverage"
```

Install Jest as development.
```
npm i --save-dev jest
```

This will take some time depending on your environment. Be patient. After all the dependencies has been completed, you are ready for the next step, running the application tests.

## Running the tests

Now that all the decencies has been installed, execute the following terminal command to run the test:

```
npm test
```
Ouput:
```
> jest --coverage

 PASS  ./cloneArray.test.js
 PASS  ./substract.test.js
 PASS  ./sum.test.js
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 | 
 cloneArray.js |     100 |      100 |     100 |     100 |
 substract.js  |     100 |      100 |     100 |     100 |
 sum.js        |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.043 s
Ran all test suites.
```

### Break the code

To test your code, edit the functions in the sum.test.js file, for example, change
```
sum(1, 2)
```
to
```
sum(1, 3)
```
Run the tests again:
```
npm test
```

The output may look like this:
```
Test Suites: 1 failed, 2 passed, 3 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        1.964 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
## Summary
How do you know if you are writing good test and why bother test at all? As you change your code, sometimes bugs are introduced. When you run your tests, you can know the results you are expecting in your code. By identifying error, you can find errors in your code.
Unit testing. Unit testing simply means you are testing the smallest unit of your code. With you unit testing, you can break down your code into small components. You can test this small component individually to identify a single unit has failed. If you find an unexpected error, you go fix the problematic code. With Unit Testing, Jest allows you to make small tests because you are only testing small part of your code, therefore, you only need to make certain the inputs and outputs for a specific section of your code runs as expected.
As a developer, testing is one of those things you either hate or love. Most developers might say they hate testing, until you work on a project with good tests and you find out how amazing it is. The purpose of this script is to allow you to run some very simple test to your JavaScript code. One important factor as a developer, running tests gives you confident to know if your project has thousands of lines of code, you can spend smaller time debugging those errors. With a test suit, you can confidently test your script with a simple command and run the test. Of course, no test is perfect but by having a test suit, you can make your application as bullet proof as possible.
## Built With
* [Visual Studio Code](https://code.visualstudio.com/) - Free and built on open source.
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
