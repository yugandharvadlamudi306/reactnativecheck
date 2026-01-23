import {useState} from "react";
import PutApiConnect from "./PutApiConnect.tsx";
import {Text, View} from "react-native";

const PutAxiosConnect = () => {
    const [putObject, setPutObject] = useState({})
    PutApiConnect().then((response) => {
        console.log(response)
        setPutObject(response)
    }).catch((error) => {
        console.log(error.message)
    })
    return (
        <View>
            <Text>{putObject.name}</Text>
        </View>
    )
}
export default PutAxiosConnect;