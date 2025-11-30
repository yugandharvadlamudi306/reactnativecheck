/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StyleSheetsExample from "./Styles";
import StyleInheritsExample from "./StyleInheritsExample";
import MergingMultipleStylesExample from "./MergingMultipleStylesExample";

AppRegistry.registerComponent(appName, () => MergingMultipleStylesExample);
