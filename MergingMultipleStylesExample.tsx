import {StyleSheet, Text, View} from "react-native";


function MergingMultipleStylesExample() {
    return (
        <View style={[styleSheet1.box, styleSheet1.circle, styleSheet1.red]}>
            <Text style={[styleSheet1.text, isActive && styleSheet1.activeTextColor]}>
                TextColor with active boolean mearging multiple styles
            </Text>
        </View>
    )
}

const isActive = false;
const styleSheet1 = StyleSheet.create({
    box: {width: 100, height: 100, backgroundColor: 'white'},
    circle: {borderRadius: 100},
    red: {backgroundColor: 'red'},
    text: {color: 'white'},
    activeTextColor: {color: 'green'}
})

export default MergingMultipleStylesExample;