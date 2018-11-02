// redux store

// import created reactotron config file
import Reactotron from '../../ReactotronConfig'; //path to reactotronConfig file

// modify the store created via redux using reactron
const middleware = applyMiddleware(ReduxThunk);
const store = Reactotron.createStore(reducers, middleware);