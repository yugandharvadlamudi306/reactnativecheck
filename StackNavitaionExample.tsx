import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./StackNavigator.tsx";
import BottomBar from "./BottomTabNavigator.tsx";

function StackNavitaionExample() {
    return (
        <NavigationContainer>
            {/*<StackNavigator/>*/}
            <BottomBar/>
        </NavigationContainer>
    )
}

export default StackNavitaionExample;