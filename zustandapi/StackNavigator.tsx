import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreenZuStand from "./LoginScreenZuStand.tsx";
import DetailsZuStandExample from "./DetailsZuStandExample.tsx";

const StackNavigator = createNativeStackNavigator();
const LoginStackNavigator = () => {
    return (
        <StackNavigator.Navigator initialRouteName="Login">
            <StackNavigator.Screen name="Login" component={LoginScreenZuStand}/>
            <StackNavigator.Screen name="Details" component={DetailsZuStandExample}/>
        </StackNavigator.Navigator>
    )
}
export default LoginStackNavigator;