import {useEffect, useState} from "react";
import getUsers from "./BasicAxiosRequest.tsx";
import {Text, View} from "react-native";

const AxionsApi = ()=>{
    const [user,setUsers] = useState([])
    useEffect(()=>{
        getUsers().then((data)=>{
            console.log(data.data);
            setUsers(data.data)
        })
    },[])
    return(
        <View>
            {user.map((item)=>(
                <Text key={item.id}>{item.name}</Text>
            ))}
            {/*<Text>{user.name}</Text>*/}
        </View>
    )
}
export default AxionsApi;