import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomBar from "./BottomTabNavigator.tsx";

const RootStackNavigator = createNativeStackNavigator()
const RootStack = () => {
    return (
        <RootStackNavigator.Navigator>
            <RootStackNavigator.Screen name={"Main App"} component={BottomBar}/>
        </RootStackNavigator.Navigator>
    )
}
export default RootStack;