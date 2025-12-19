import {Image, ImageBackground, Text, View} from "react-native";

function ImageStyling() {
    return (
        <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
            <Image source={require('./assets/img.png')}
                   style={{width: 200, height: 200}} resizeMode="contain"></Image>
            {/*<Image source={require('./assets/img.png')} resizeMode={"stretch"}/>*/}
            <Image source={require('./assets/img.png')} style={{width: 200, height: 200}} resizeMode={"repeat"}/>
            <Image source={require('./assets/img.png')}
                   style={{width: 200, height: 200, borderRadius: 80, borderWidth: 2, borderColor: 'red'}}
                   resizeMode={"center"}/>
            <ImageBackground source={require('./assets/img.png')} style={{height: 300, width: 300}}>
                <Text> Check </Text>
            </ImageBackground>
        </View>
    )
}

export default ImageStyling