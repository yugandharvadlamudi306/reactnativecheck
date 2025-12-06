import {Text, View} from "react-native";

function FlexBoxMainAxisAlignment() {
    return (
        <View style={{flexDirection: 'column', justifyContent: 'flex-start', height: 500, backgroundColor: 'red'}}>
            <Text>Flexbox 1</Text>
            <Text>Flexbox 2</Text>
            <View style={{flexDirection: 'column', justifyContent: 'flex-end', flex: 1, backgroundColor: 'blue'}}>
                <Text>Flexbox direction low</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', height: 50}}>
                <Text>Flexbox direction Center </Text>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', height: 50
            }}>
                <Text>one</Text>
                <Text>one</Text>
                <Text>one</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text>space even</Text>
                <Text>space even</Text>
                <Text>space even</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text> space around</Text>
                <Text> space around</Text>
                <Text> space around</Text>
            </View>
            {/* Flex align items example */}
            <View style={{flexDirection: 'row', alignItems: 'flex-end', backgroundColor: 'green', height: 100}}>
                <Text>Align items</Text>
                <Text>ALign items</Text>

            </View>
            <View style={{flexDirection: 'row',  backgroundColor: 'yellow'}}>
                <Text style={{flex:2,backgroundColor:'red'}}> ALigne item </Text>
            </View>
        </View>
    )
}

export default FlexBoxMainAxisAlignment