import {useState} from "react";
import {Button, Text, View} from "react-native";

const UseStateEx = () => {
    const [count, setCount] = useState(0)
    console.log(""+count)
    return (
        <View>
            <Text>Count {count}</Text>
            <Button title="count increase" onPress={() => {
                setCount(count + 1)
            }}/>
        </View>
    )
}
export default UseStateEx;