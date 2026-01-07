import {Text, View} from "react-native";
import NameContext from "./ContextApiChecking.tsx";
import {useContext} from "react";

const ConsumingContext = ({}) => {
    const name = useContext(NameContext)

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
export default ConsumingContext;