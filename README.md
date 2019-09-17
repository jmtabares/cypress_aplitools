# Cypress - Applitools turorial
Pre requisites: Node.js should be instaled
You can use any IDE, for this exmaple I used VS Code
For Applitools: you should create a free account on https://applitools.com/ y get your APPLITOOLS_API_KEY from your welcome email
Install (OSX):
1. Create a new directory  `mkdir cypress_test`
2. Enter to the created dir `cd cypress_test`
3. Init the npm withou question `npm init -y`
4. install cypress as a dev dependency `npm install cypress --save-dev`
5. for TS support `npm install webpack @cypress/webpack-preprocessor typescript ts-loader`  

6. Setup cypress for transpiling typescript by editing cypress_test/cypress/plugins/index.js to match the following:
```javascript
const wp = require('@cypress/webpack-preprocessor')
module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      }
    },
  }
  on('file:preprocessor', wp(options))
}
````
7. Optionally add a few scripts to the cypress_test/package.json file:
```javascript
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:headed": "cypress run --headed",
    "cy:chrome": "cypress run --browser chrome",
    "update": "npm i cypress@latest typescript@latest ts-loader@latest webpack@latest @cypress/webpack-preprocessor@latest -S -E"
````    
9. Or clone this repo and execute `npm install`
8. To run
  * open cypress  `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run cypress:open`
  * Execute specific spec headless (Electron browser) with video recording `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run cy:run -- --record --spec "cypress/integration/my-spec.js"`
  * Execute Electron headed mode `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run cy:headed`
  * Execute with chrome `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run cy:chrome`
  * Execute specific spec headed Chrome `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run  cy:chromespec -- -- "cypress/integration/tutorial/firstspec.spec.ts"`
  * Execute specific spec headless (Electron browser) with video recording `APPLITOOLS_API_KEY=<Your_applitools_api_keyu> npm run  cy:spec -- "cypress/integration/tutorial/firstspec.spec.ts"`

