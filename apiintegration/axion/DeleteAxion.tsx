import axios from "axios";

const DeleteAxion = async ()=>{
    const data = await axios.delete('https://api.restful-api.dev/objects/6')
    return data.data
}
export default DeleteAxion;