/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle: node_modules/victory']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
