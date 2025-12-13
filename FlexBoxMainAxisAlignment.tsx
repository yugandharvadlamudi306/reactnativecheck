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
            <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
                <Text style={{flex: 2, backgroundColor: 'red'}}> ALigne item </Text>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: 'purple'}}>
                <Text style={{flex: 1, backgroundColor: 'white'}}>flex 1</Text>
                <Text style={{flex: 2, backgroundColor: 'green'}}>flex 2</Text>
                <Text style={{flex: 1}}>flex 2</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: "center"}}>
                <Text>Center 1</Text>
                <Text>Center 2</Text>
                <Text>Center 3</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text>Space Evenly 1</Text>
                <Text>Space Evenly 2</Text>
                <Text>Space Evenly 3</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Space Between 1</Text>
                <Text>Space Between 2</Text>
                <Text>Space Between 3</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>Space around 1</Text>
                <Text>Space around 2</Text>
                <Text>Space around 3</Text>
            </View>
            {/*Dimenctions, Margins, padding, */}
            <View style={{width: 50, height: 50, backgroundColor: 'green'}}>
                <Text>Width Align </Text>
            </View>
            {/*Percentage base, padding , wdith */}
            <View style={{width:100, height:100, backgroundColor: 'blue', padding
            :10, margin:10}}>
                <Text style={{width:'50%', height:'50%', backgroundColor:'purple'}}>percentage </Text>
            </View>
            {/*min width and height example*/}
            <View style={{minHeight:10,minWidth:10,maxWidth:60, backgroundColor:'orange'}}>
                <Text>Min Height</Text>
            </View>
        </View>
    )
}

export default FlexBoxMainAxisAlignment