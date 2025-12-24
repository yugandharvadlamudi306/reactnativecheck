import {View} from "react-native";

function PromieseExample() {
    /*
        const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 2000)
        })
        fetchData.then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error.message)
        })
    */
    // Promice with reject example
    const promicesReject = new Promise((resolve, reject) => {
        var checkCondition = true;
        if (checkCondition) {
            resolve("Promise resolved successfully")
        } else {
            reject("Promise rejected")
        }
    })
    promicesReject.then(data => {
        if (data) {
            console.log(data)
        }
    }).catch(error => {
        console.log(error)
    })
    // APi calling example
    fetch("https://jsonplaceholder.typicode.com/users/5").then(response => {
        return response.json()
    }).then(data => {
        console.log("API data ", data.id)
    }).catch(error => {
        console.log("API error ", error)
    })
    // chaining the promices
    getUsers().then(data => {
        getPosts(data.id).then(data => {
            console.log("posts data ", data)
        })
    })

    // prallel promices example
    parallelPromices()
    return (
        <View>

        </View>
    )

}

function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users/7").then(response => {
        return response.json()
    })
}

function parallelPromices() {
    const api1 = fetch("https://fakestoreapi.com/products/1").then(response => {
        return response.json()
    })
    const api2 = fetch("https://jsonplaceholder.typicode.com/users/7").then(response => {
        return response.json()
    })
    Promise.all([api1, api2]).then(([response1, response2]) => {
        console.log("response 1" + response1.id)
        console.log("response 2" + response2.id)
    }).catch(error => {
        console.log("error in promices " + error)
    })
}

function getPosts(userId: number) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then
    (response => {
        return response.json()
    })
}

export default PromieseExample;