import {useContext} from "react";
import CounterContext from "./CounterContext.tsx";
import {Button, Text, View} from "react-native";

const CounterContextConsumer = () => {
    const {counter, setCount}: number = useContext(CounterContext)
    return (
        <View>
            <Text>Check{counter}</Text>
            <Button title="count increase" onPress={()=>{
                setCount(counter+1)
            }}/>
        </View>
    )
}
export default CounterContextConsumer;