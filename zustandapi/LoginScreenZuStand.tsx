import {Button, Text, View} from "react-native";
import {userDatastore} from "./UserStoreZuStand.tsx";

const LoginScreenZuStand = ({navigation}) => {
    const login = userDatastore((state) => state.login)
    const setUserLogin = () => {
        login({name: "yugandhar", email: "yugandhar@gmail.com"})
        navigation.navigate("Details")
    }
    return (
        <View>
            <Text>Click button to login</Text>
            <Button title="login" onPress={setUserLogin}/>
        </View>
    )

}
export default LoginScreenZuStand;