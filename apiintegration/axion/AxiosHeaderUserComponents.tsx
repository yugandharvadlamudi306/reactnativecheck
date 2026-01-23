import {useEffect, useState} from "react";
import {getUsers} from "./GetAxiosExample";
import {Text, View} from "react-native";

function AxiosHeaderUserComponents() {
    const [users, setUsers] = useState<any[]>([])
    useEffect(() => {
        getUsers().then((response) => {
            console.log(response.length)
            setUsers(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <View>
            {
                users.map(user => (
                    <Text key={user.id}>{user.name}</Text>
                ))
            }
            {/*<Text>header thing checking</Text>*/}
        </View>
    )
}

export default AxiosHeaderUserComponents;