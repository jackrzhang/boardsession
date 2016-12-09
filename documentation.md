#User Manual

Lets get this up and running!

##Requirements
[Node.js](https://nodejs.org) v6+

##Installation
```sh
git clone https://github.com/jackrzhang/boardsession.git
cd boardsession
npm install
```
heads up: `npm install`'ll take a while...

##Configuration
Create `config/dotenv/production.env` and `config/dotenv/development.env`.
```sh
cp config/dotenv/production.example.env config/dotenv/production.env
cp config/dotenv/development.example.env config/dotenv/development.env
```

##Production Mode
```sh
npm run cs50
```
:) which does the following:

1. Runs the webpack server build; `src/server/index.js` => `build/server/server.bundle.js`.
2. Runs the webpack client build; `src/client/index.js` => `build/client/index.bundle.js`.
3. Run the server.

```sh
./node_modules/.bin/webpack --config config/webpack/config.client.prod.js
./node_modules/.bin/webpack --config config/webpack/config.server.js
NODE_ENV=production node build/server/server.bundle.js
```

##Development Mode
Turns on [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html), 
through [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
& [React Hot Loader](https://github.com/gaearon/react-hot-loader), and automatically rebuilds and reruns server-side changes
with [nodemon](https://nodemon.io/).
```sh
# 3 separate processes
npm run watch-server
npm run watch-client
npm run dev
```
Additionally, all server-side socket events and incoming requests will be logged.
In your browser, hit Ctrl+D to toggle [Redux DevTools](https://github.com/gaearon/redux-devtools), which will display
all actions as they are dispatched, along with corresponding changes to state.

##Linting
[ESLint](http://eslint.org/), using Airbnb's 
[configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
```sh
npm run lint
```
