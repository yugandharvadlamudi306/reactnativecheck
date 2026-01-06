import {useState} from "react";
import ChildA from "./ChildA.tsx";
import {Text, View} from "react-native";
import ChildB from "./ChildB.tsx";

const ParentStateUplift = () => {
    const [count, setCount] = useState(0)
    return (
        <View style={{marginTop:30}}>
            <Text>Count {count}</Text>
            <ChildA count={count} setCount={setCount}/>
            <ChildB count={count}/>
        </View>
    )
}
export default ParentStateUplift;