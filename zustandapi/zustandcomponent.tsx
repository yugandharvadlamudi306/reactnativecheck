import {Button, Text, View} from "react-native";
import {useCountStore} from "./counterstore";

const ZustandCounterScreen = () => {
    const {count,increase,decrease} = useCountStore()
    return (
        <View>
            <Text>One {count}</Text>
            <Button title="increase" onPress={increase}/>
            <Button title="decrease" onPress={decrease}/>
        </View>
    )
}
export default ZustandCounterScreen;