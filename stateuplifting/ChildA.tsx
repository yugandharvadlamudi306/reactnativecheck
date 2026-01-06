import {Button, View} from "react-native";

function ChildA({count, setCount}) {
    return (
        <View>
            <Button title="count increase" onPress={() => {
                setCount(count + 1)
            }}/>
        </View>
    )

}
export default ChildA;