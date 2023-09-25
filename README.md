# PlayWright Demo for API and Web Testing

Demo of PlayWright for API testing and Web testing automation, which runs on CircleCI pipeline

### Requirements
* Node.js 18.16.1
* VS Code
* Playwright

### Command to run from the terminal on the local 
* npx playwright test

### Steps to follow
* Install PlayWright Test for VSCode, follow https://playwright.dev/docs/getting-started-vscode
* CircleCI setup integration with git repositor, follow https://circleci.com/blog/setting-up-continuous-integration-with-github/
see .circleci/config.yml for pipeline configured for this demo
* Pipeline setup and tested, credentials for https://app.circleci.com/projects/ shared in the email.

### Results
A report like below will be generated in playwright-report directory, can also be viewed using npx playwright show-report command
Screenshots will be generated for the following steps : homepage navigation, Vehicle link hover, charge page, energy page and signup page
If there is any unexpected error, the log will show the error.
![Error Scenario](https://github.com/DeepaKaur/playwright_demo/blob/main/exceptionScenario.png?raw=true)