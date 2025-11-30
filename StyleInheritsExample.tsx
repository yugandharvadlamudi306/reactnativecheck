import {Text, View} from "react-native";

function StyleInheritsExample() {
    return (
        // upto view the style is not inherited
        <View style={{padding: 30, backgroundColor: 'white'}}>
            <Text>Style not inherit</Text>
            {/*the below inherited */}
            <Text style={{color: "red", fontSize: 20}}>
                This text is red and 20 in font size.
                <Text>
                    This text is default color and size.
                </Text>
            </Text>
            {/*here parent view padding should but it is not going because non text componet wont get inherited*/}
            <View>
                <Text>Non text component do not inherit styles</Text>

            </View>
        </View>
    )
}

export default StyleInheritsExample