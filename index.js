/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Login from './components/Login';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Login);
