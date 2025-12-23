function ConstLetVarExamples() {
    let example = 'check';
    const constExample = 'const check'
    const nameArray = {name: 'yugandhar', list: [1, 2]}
    if (true) {
        let blockScope = 20
        console.log(blockScope)
    }
    console.log(example, constExample, nameArray.list[1])
    /*destructing*/
    const {name, list} = nameArray
    console.log("name is "+name ,list)
    const arrayCheck = [...list]
    console.log("name is "+[...list])
    
    // spread operator with object example
    const objSpread = {name:"yuga", age: "26"}
    
    // This creates a NEW object. It copies all properties from objSpread,
    // then overwrites 'age' with the new value 26.
    const updatedUser = {
        ...objSpread,
        age: 2
    };
    
    // Fixed the syntax error here (removed the trailing dot)
    console.log("check is object spread ", updatedUser.age)

    ArryowFunctions()
}

function ArryowFunctions() {
    const listObject = (a: number, b: number) => {
        console.log(a, b)
    }
    listObject(10, 20)
    const intermediateConsume = (x: number): number => {
        return (x * x)
    }

    console.log(intermediateConsume(23))
    const obj = {
        valuecheck: 10,
        getValue() {
            return this.valuecheck
        }
    }
    console.log(obj.getValue())
}


export default ConstLetVarExamples;