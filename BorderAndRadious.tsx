import {StyleSheet, Text, View} from "react-native";

function BorderAndRadious() {
    return (
        <View style={{borderWidth: 2, borderColor: 'white'}}>
            <Text>
                Border and Radious Example
            </Text>
            <View style={{borderWidth: 2, borderTopColor: 'green'}}>
                <Text> border top color </Text>
            </View>
            <View style={styleBorderRadious.borderRadious}>
                <Text>Border Radious</Text>
            </View>
            <View style={styleBorderRadious.circleRadious}/>
            <View style={{width: 200, overflow: 'hidden'}}>
                <Text numberOfLines={3}
                      ellipsizeMode={"tail"}> lsdjfalkdjflakjdflajsdflajdflajdflkajdlfkjaldfjaljdflaksdjflakdjflakjdflajsdflakjdflajdflajdflajdflajsdflkajsdlfjasdlkfjalsdkfjalsdkfjalsdkfjalsdkjfalsdkfjlaskdjflasdjflakdjflakdjflakdjfalkjflakdjfalkjdflkajdflajdfl</Text>
            </View>
            <View style={styleBorderRadious.cardElevation}>
                <Text> Card with Elevation </Text>
            </View>
        </View>

    )
}

const styleBorderRadious = StyleSheet.create({
    borderRadious: {
        borderWidth: 2,
        borderColor: 'green',
        borderTopLeftRadius: 30,
        borderRadius: 50
    },
    circleRadious: {
        width: 120,
        height: 120,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 60
    },
    cardElevation: {
        backgroundColor: 'white',
        borderRadius: 10,
        // iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Android
        elevation: 10,
    }
})
export default BorderAndRadious;