import {Text, View} from "react-native";

function FlexboxLayoutExample(){
    return(
        <View style={{flexDirection : 'row'}}>
            <Text>FlexBoxLayout example</Text>
            <Text>FlexBoxLayout example 2</Text>
            <View >
                <Text>Flexbox column 1</Text>
                <Text>Flexbox column 2</Text>
            </View>
        </View>

    )
}
export default FlexboxLayoutExample;