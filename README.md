# reactotronRN-redux

#### how to configure reactotron with react native and redux.

### Prerequisite
⋅⋅* Add below packages and run npm i --save-dev

"reactotron-react-native": "^1.14.0",
"redux-devtools-extension": "^2.13.2",

⋅⋅* Get the desktop app from [here](https://github.com/infinitered/reactotron/releases/tag/v2.1.2)

### Steps to config reactotron in the app

1. Add the reactotronConfig.js file to the root(if you have config folder in root, then to it.)
2. Config the store as in the example file store.js
3. Keep the reactotron app open, and build the app.
4. once the app is build run `adb reverse tcp:9090 tcp:9090` command in the cli and reload the app.
5. App should be connected to reactotron now.