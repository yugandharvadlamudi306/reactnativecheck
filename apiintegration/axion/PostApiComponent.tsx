import {useEffect, useState} from "react";
import PostApi from "./PutAxios.tsx";
import {Text, View} from "react-native";

const PostApiAxionCompoent =()=>{
    const[login,setLogin]=useState({});
    useEffect(()=>{
        PostApi().then((response)=>{
            // console.log(response.data.body)
            setLogin(response.data)
        }).catch((reason)=>{
            console.log(reason)
        })
    },[])
    return(
        <View>
            <Text>{login.body}</Text>
        </View>
    )
}
export default PostApiAxionCompoent;