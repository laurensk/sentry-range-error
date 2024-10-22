/**
 * @format
 */


// THIS IS ALSO REQUIRED TO REPRODUCE
import 'core-js/actual/url';
import 'core-js/actual/url-search-params';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
