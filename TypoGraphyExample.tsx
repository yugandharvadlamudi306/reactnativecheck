import {Text, View} from "react-native";

function DefaultTypography() {
    return (
        <View>
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'DEBROSEERegular'
            }}>Hello Font Typography</Text>

            <Text style={{lineHeight: 18, textAlign: "center"}}>lsfjlkadsfj</Text>
        </View>
    )
}

export default DefaultTypography;