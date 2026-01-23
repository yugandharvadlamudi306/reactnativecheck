//clear example with axios with header api call example
import axios from "axios";

export const getUsers = async ()=>{
    const response = await axios.get(    'https://jsonplaceholder.typicode.com/users',
        {
            headers:{
                Accept: 'application/json',
            }
        })
    return response.data
}