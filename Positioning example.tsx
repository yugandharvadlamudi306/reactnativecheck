import {Text, View} from "react-native";

function PositioningExample() {
    return (
        <View>
            {/* Positioning example */}
            <View style={{marginTop: 50, marginLeft: 50}}>
                <Text style={{backgroundColor: 'lightgray'}}>
                    Hello world
                </Text>
            </View>
            <View style={{position: "absolute", top: 100, left: 150}}>
                <Text style={{backgroundColor: 'red'}}>
                    Positioned text
                </Text>
            </View>
            <View style={{position: "relative"}}>
                <Text style={{position: "absolute", zIndex: 1}}>Z index one</Text>
                <Text style={{position: "absolute", zIndex: 2}}>Z index two</Text>

            </View>
        </View>
    )
}

export default PositioningExample;