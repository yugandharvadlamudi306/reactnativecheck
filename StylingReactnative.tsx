import {View} from "react-native";
import {color} from "ansi-fragments";
import LinearGradient from 'react-native-linear-gradient';


function ReactnativeStyleExample() {
    return (
        <View style={{
            height:300,
            width:300,
            backgroundColor: '#FF0000',
            margin:30
        }}>
            <View style={{height:'50%'
                , width:'50%'
                ,backgroundColor: '#0f0'
            }}>

            </View>
            <View style={{height:'30%',width:'30%', backgroundColor: '#0000ff'}}></View>
            <View style={{
                height:'80%',
                width: '80%',
                backgroundColor: 'rgb(255,255,0)',
                opacity: 0.5
            }}>
            </View>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{height: 100, width: 100, marginTop: 10}}
                start={{x:0,y:0}}
                end={{x:1, y:0}}
            />
        </View>
    )
}

export default ReactnativeStyleExample;