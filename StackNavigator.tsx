import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreenCheck from "./screens/HomeScreen.tsx";
import DetailsScreen from "./screens/DetailsScreen.tsx";

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreenCheck}/>
            <Stack.Screen name="Deatails" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;