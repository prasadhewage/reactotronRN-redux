import Reactotron from 'reactotron-react-native';
import {  reactotronRedux as reduxPlugin } from 'reactotron-redux';

const reactotron = Reactotron
  .configure({
    name: 'O2A APP' // change app name 
  }) // controls connection & communication settings
  .use(reduxPlugin());

  if (__DEV__) {
    reactotron.connect(); // let's connect!
    Reactotron.clear();
  }

export default reactotron;