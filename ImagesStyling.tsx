import {Dimensions, Image, ImageBackground, Text, View} from "react-native";
import {useEffect, useState} from "react";

function ImageStyling() {
    console.log("screen size",screenWidth,screenHeight)
    const [width,setWidth] = useState(Dimensions.get("window").width)
    const [height,setHeigth] = useState(Dimensions.get("window").height)
    useEffect(() => {
        const subscription = Dimensions.addEventListener("change",({window})=>{
            setWidth(window.width);
            setHeigth(window.height);
        });
        return ()=>subscription.remove();
    }, []);
    return (
        <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
            {/*
            <Image source={require('./assets/img.png')}
                   style={{width: 200, height: 200}} resizeMode="contain"></Image>
*/}
            {/*<Image source={require('./assets/img.png')} resizeMode={"stretch"}/>*/}
            {/*
            <Image source={require('./assets/img.png')} style={{width: 200, height: 200}} resizeMode={"repeat"}/>
*/}

            <Image source={require('./assets/img.png')}
                   style={{width: 200, height: 200, borderRadius: 80, borderWidth: 2, borderColor: 'red'}}
                   resizeMode={"center"}/>
            <ImageBackground source={require('./assets/img.png')} style={{height: 300, width: 300}}>
                <Text> Check </Text>
            </ImageBackground>
            <Image style={{width: width, height: (height / 4)}} source={require('./assets/img.png')}
                   resizeMode={"none"}/>
        </View>

    )
}

const {width, height} = Dimensions.get('window')
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')
export default ImageStyling