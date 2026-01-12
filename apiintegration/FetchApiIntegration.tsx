import {useState} from "react";
import {Text, View} from "react-native";


const FetchApi = () => {
    const [userData,setUserData] = useState([])
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{return response.json()}).catch((error)=>console.log(error))
        .then((data)=>{
            console.log(data)
            setUserData(data)
        })
    return(
        <View>
            {
                userData.map((user)=>{
                    return <Text>{user.name}</Text>
                })
            }
        </View>
    )

}
export default FetchApi;