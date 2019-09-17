# cypress
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
npm run cypress:open
npm run cy:run -- --record --spec "cypress/integration/my-spec.js"
npm run cy:headed to run electron headed mode
npm run cy:chrome