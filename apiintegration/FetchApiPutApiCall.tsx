import {useState} from "react";
import {Button, View} from "react-native";

const FetchApiPutApiCall = () => {
    const [result, setResult] = useState([])
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log("data"+data)
            }
        )
            .catch((error) => {
                console.log("error "+error)
            })
    }
    const updateUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Yugandhar',
                    email: 'yugandhar@gmail.com',
                })
            });
            const data = await response.json()
            setResult(data)
            console.log(data)
        } catch (error) {
            console.log("error" + error)
        }

    }

    // getUsers()
    return (
        <View style={{marginTop: 50}}>
            <Button title="Update user " onPress={()=>{
                updateUser()
                getUsers()
            }}/>
        </View>
    )
}
export default FetchApiPutApiCall;