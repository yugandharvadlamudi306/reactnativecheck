import {Button, Text, View} from "react-native";

function HomeScreenCheck({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="go to Second Screen" onPress={() => {
                navigation.navigate("Deatails",{id:101,name:'yugandhar'})
            }}/>
        </View>
    )
}

export default HomeScreenCheck;