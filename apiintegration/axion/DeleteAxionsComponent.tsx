import axios from "axios";
import {useEffect, useState} from "react";
import DeleteAxion from "./DeleteAxion.tsx";
import {Text, View} from "react-native";

const DeleteAxionsComponent = () => {
    const [deleteResponse, setDeleteResponse] = useState(null)
    useEffect(()=>{
        DeleteAxion().then((response) => {
            console.log(response)
            setDeleteResponse(response)
        }).catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <View>
            <Text>
                {deleteResponse?.message||'Deleting...'}
            </Text>
        </View>
    )
}
export default DeleteAxionsComponent;