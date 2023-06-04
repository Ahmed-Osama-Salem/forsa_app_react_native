// /**
//  * @format
//  */

// // import {AppRegistry} from 'react-native';
// // import App from './App';
// // import {name as appName} from './app.json';
// // AppRegistry.registerComponent(appName, () => App);

// import {AppRegistry, Platform} from 'react-native';
// import App from './App';
// import i18n from './langauges/i18n';

// AppRegistry.registerComponent('main', () => App);

// if (Platform.OS === 'web') {
//   const rootTag =
//     document.getElementById('root') || document.getElementById('main');
//   AppRegistry.runApplication('main', {rootTag});
// }

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './langauges/i18n';
AppRegistry.registerComponent(appName, () => App);
