import axios from "axios";

const PutApiConnect = async () => {
    const data = await axios.put('https://api.restful-api.dev/objects/7', {
        "name": "Apple MacBook Pro 18",
        "data": {
            "year": 2019,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
        }
    },{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return data.data
}
export default PutApiConnect