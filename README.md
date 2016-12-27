# typescript-react-mobx-boilerplate

* webpack
* typescript
* react
* react-router
* mobx
* mobx-jsonapi-store
* PostCSS
* Material UI

## Browser support

By default, it is set up for Chrome 55. To change the browser support modify the `.babelrc` file according to the [babel-preset-env](https://github.com/babel/babel-preset-env) documentation.

## Setup
Requirement: yarn - `npm install -g yarn`

* `yarn`

### Development
* `yarn run dev`

### Build
* `yarn run build`

## TODO

* SCSS imports not working
* HMR not working without reload
* check if fetch polyfill is really enabled
* react-router
* code splitting - [manifest chunk](https://webpack.js.org/guides/code-splitting-libraries/#manifest-file)
* basic tests