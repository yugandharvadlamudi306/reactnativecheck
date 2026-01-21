/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlexboxLayoutExample from "./flexboxlayout";
import FlexBoxMainAxisAlignment from "./FlexBoxMainAxisAlignment";
import ReactnativeStyleExample from "./StylingReactnative";
import TypoGraphyExample from "./TypoGraphyExample";
import PositioningExample from "./Positioning example";
import BorderAndRadious from "./BorderAndRadious";
import ImageStyling from "./ImagesStyling";
import ConstLetVarExamples from "./ConstLetVarExamples";
import ArrayMethodsExample from "./ArrayMethodsExample";
import PromieseExample from "./PromiesExample";
import AsynAwait from "./AsynAwait";
import FunctionalComponents from "./FunctionalComponents";
import StatesExample from "./SatesExample";
import StackNavitaionExample from "./StackNavitaionExample";
import UseStateEx from "./states/UseStateExample";
import ParentStateUplift from "./stateuplifting/ParentState";
import ContextApiChecking from "./contextapi/ContextApiChecking";
import ContextProvider from "./contextapi/NameContextProviderExample";
import CounterContextProvider from "./contextapi/CounterContextProvider";
import ZustandCounterScreen from "./zustandapi/zustandcomponent";
import ZuStandNavigationContainer from "./zustandapi/LoginZuStandNavigationContainer";
import FetchApi from "./apiintegration/FetchApiIntegration";
import FetchApiPutApiCall from "./apiintegration/FetchApiPutApiCall";
import getUsers from "./apiintegration/axion/BasicAxiosRequest";
import AxionsApi from "./apiintegration/axion/AxiosApiComponent";
import PostApiAxionCompoent from "./apiintegration/axion/PostApiComponent";

AppRegistry.registerComponent(appName, () => PostApiAxionCompoent
);
