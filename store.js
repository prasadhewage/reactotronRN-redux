// redux store example

// import created reactotron config file
import Reactotron from '../../ReactotronConfig';

// modify the store created via redux and create store using reactron
const middleware = applyMiddleware(ReduxThunk);
const store = Reactotron.createStore(reducers, middleware);