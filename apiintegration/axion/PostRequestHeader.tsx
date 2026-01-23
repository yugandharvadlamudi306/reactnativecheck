//Post axios header component
import axios from "axios";

export const getPostHeader = async () => {
    const response = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data
}
export default getPostHeader;
