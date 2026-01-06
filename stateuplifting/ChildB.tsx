import {Text, View} from "react-native";

function ChildB({count}){
    return(
        <View>
            <Text>check {count}</Text>
        </View>
    )
}
export default ChildB;