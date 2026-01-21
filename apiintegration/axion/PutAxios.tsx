import axios from "axios";

const PostApi =async ()=> {
    const data = await axios.post('https://jsonplaceholder.typicode.com/posts',

         {test: 'test', body:'hello', userId:1});

    return data
}
export default PostApi

