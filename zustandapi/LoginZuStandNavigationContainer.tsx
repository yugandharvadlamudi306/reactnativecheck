import {NavigationContainer} from "@react-navigation/native";
import LoginStackNavigator from "./StackNavigator.tsx";

const ZuStandNavigationContainer =()=>{
    return(
        <NavigationContainer>
            <LoginStackNavigator/>
        </NavigationContainer>
    )
}
export default ZuStandNavigationContainer;