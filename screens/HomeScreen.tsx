import {Button, Text, View} from "react-native";

function HomeScreenCheck({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="go to Second Screen" onPress={() => {
                // The route name defined in BottomTabNavigator is "Details", not "Deatails".
                // I have corrected the spelling here so navigation works.
                navigation.navigate("Details", {id: 101, name: 'yugandhar'})
            }}/>
        </View>
    )
}

export default HomeScreenCheck;