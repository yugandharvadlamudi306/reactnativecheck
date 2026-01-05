import {Button, Text, View} from "react-native"

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Hello world </Text>
            <Button title="Click for Navigat" onPress={() => {
                navigation.navigate("Second")
            }}/>
        </View>
    )
}
export default HomeScreen