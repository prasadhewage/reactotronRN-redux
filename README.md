# reactotronRN-redux

#### how to configure reactotron with react native and redux.

### Prerequisite
* Add below packages to package.json as `devDependencies` and run `npm i`

`"reactotron-react-native": "^2.1.0",`
`"reactotron-redux": "^2.1.0",`

* Get the desktop app from [here](https://github.com/infinitered/reactotron/releases/tag/v2.1.2)

### Steps to config reactotron in the app

1. Add the [reactotronConfig.js](https://github.com/prasadhewage/reactotronRN-redux/blob/master/ReactotronConfig.js) file to the root(if you have config folder in root, then to it.)
2. Update the redux store as below

   Import reactotronconfig file `import Reactotron from '<path>/<to>/ReactotronConfig';`

   Update the redux store using below code

   `const middleware = applyMiddleware(ReduxThunk);`
   `const store = Reactotron.createStore(reducers, middleware);`

3. Keep the reactotron app open, and build the app.
4. once the app is build run `adb reverse tcp:9090 tcp:9090` command in the cli.
4. reload the app and the App should be connected to reactotron now.

Read more about reactotron from [here](https://github.com/infinitered/reactotron).