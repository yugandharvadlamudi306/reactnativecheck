import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreenCheck from "./screens/HomeScreen.tsx";
import DetailsScreen from "./screens/DetailsScreen.tsx";

const BottomTabNavigator = createBottomTabNavigator();
const BottomBar = () => {
    return (
        <BottomTabNavigator.Navigator
            initialRouteName="Home">
            <BottomTabNavigator.Screen name="Home" component={HomeScreenCheck}/>
            <BottomTabNavigator.Screen name="Details" component={DetailsScreen}
                                       initialParams={{id: 102, name: 'yugandhar'}}
                                       listeners={({navigation})=>({
                                         tabPress:(e)=>{
                                             navigation.setParams({id:102,name:'yugandhar'})
                                         }
                                       })}
            />
        </BottomTabNavigator.Navigator>
    )
}
export default BottomBar;