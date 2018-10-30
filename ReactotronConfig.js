import Reactotron from 'reactotron-react-native';
import {  reactotronRedux as reduxPlugin } from 'reactotron-redux';

const reactotron = Reactotron
  .configure({
    name: 'O2A APP'
  }) // controls connection & communication settings
  .use(reduxPlugin())
  .connect(); // let's connect!

export default reactotron;