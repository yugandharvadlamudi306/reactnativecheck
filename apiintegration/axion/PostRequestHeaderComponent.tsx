import {useEffect} from "react";
import PostRequestHeader, {getPostHeader} from "./PostRequestHeader.tsx";
import {Text, View} from "react-native";

function PostHeaderAxiosHeaderComponent() {
    useEffect(() => {
        getPostHeader().then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    return (
        <View>
            <Text>Hello world</Text>
        </View>
    )
}
export default PostHeaderAxiosHeaderComponent;