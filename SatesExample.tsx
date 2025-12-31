import {Button, Text, TextInput, View} from "react-native";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {CreateContextExample} from "./CreateContext";

function StatesExample() {
    const [count, setCount] = useState(0)
    useSateExample()
    useStateExample2(count)
    // userEffectWithCleanup()
    return (
        <View>
            <Text onPress={() => {
                setCount(count + 1)

            }} style={{marginTop: 30, marginLeft: 30}}>check</Text>
            <Text>{count}</Text>
            <MyUseRefExample/>
            <MyUseRefExampleFocus/>
            <SmartCounter/>
            <UseMemoExample/>
            <MyCallBackExample/>
            <CreateContextExample.Provider value="yugandhar">
                <ChildContext/>
            </CreateContextExample.Provider>
        </View>
    )
}

const useSateExample = () => {
    useEffect(() => {
        console.log("use effect called")
    }, []);// initial render only
}
const useStateExample2 = (count: number) => {
    useEffect(() => {
        console.log("use effect called")
    }, [count])
}
// Clean useEffect to prevent memory leaks
const MyUseRefExample = () => {
    const check = useRef(0);
    return (
        <View>
            <Text>{check.current}</Text>
        </View>
    )

}
// UseRef with focus otion
const MyUseRefExampleFocus = () => {
    const focusRef = useRef(null);
    const handleButtonClick = () => {
        focusRef.current.focus()
    }
    return (
        <View>
            <TextInput ref={focusRef} placeholder="type hear"/>
            <Button title="focus" onPress={handleButtonClick}/>
        </View>
    )
}
// basic example of useEffect, useState, useRef
const SmartCounter = () => {
    const [count, setCount] = useState(0);
    const preCountRef = useRef(count)
    useEffect(() => {
        if (preCountRef.current !== undefined && count > preCountRef.current) {

            console.log("preCountRef", preCountRef.current)
            preCountRef.current = count
        }
    }, [count])
    return (
        <View>
            <Text onPress={() => {
                setCount(count + 1)
            }}>Check</Text>
        </View>
    )

}

const UseMemoExample = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const value = useMemo(() => {
        return numbers.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
        }, 0)
    }, [numbers])
    console.log("useMemoExample" + value)
}
// usecallback example
const MyCallBackExample = () => {
    const callbackExample = useCallback(() => {
        console.log("callback called")
    })
    return (
        <View>
            <Button title="hello" onPress={callbackExample}/>
        </View>
    )
}

const ChildContext=()=>{
    const name = useContext(CreateContextExample)
    return(
        <View>
            <Text>Child Context{String(name)}</Text>
        </View>
    )
}
export default StatesExample;