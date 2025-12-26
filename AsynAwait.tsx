function AsynAwait() {

    AsycFuction().then(data => {
        console.log(data)
    })
    ProficeData()
}

async function AsycFuction() {
    return ("Hello world Async")
}

// await promice example
async function ProficeData() {
    const check = await NewPromice()
    console.log(check)
}

function NewPromice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from new promice")
        }, 5000)
    })
}

export default AsynAwait;