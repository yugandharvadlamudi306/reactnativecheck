import {Button, Text, View} from "react-native";
import {useState} from "react";

function FunctionalComponents() {
    const propPress = () => {
        console.log("Hello")
    }
    return (
        <View>
            <Example1FuctionalComponent/>
            <MyArrowComponent/>
            <MyArrowComponent2 name="Functional Compoent with data"/>
            <MyArrowComponent2 name={2}/>// passing number as props
            <MyPropsExample name="Props Example" age={2}/>// passing string and number as props
            <ArrayPropsExample skills={['a', 'b', 'c']}/>// passing array as props
            <ObjectPropsExample userObj={{name: 'yugandhar obj', age: 34}}/>// passing object as props
            <MyPropsFuction propPress={propPress}/>// passing function as props
            <MystatesExample/> // state example
            <MyEventHandle/>
            <MyEventConditionRenderling/>
        </View>
    )
}

function Example1FuctionalComponent() {
    return (
        <View>
            <Text>Fuctional COmponent</Text>
        </View>
    )
}

const MyArrowComponent = () => {
    return (
        <View>
            <Text> Arrow Function</Text>
        </View>
    )
}
const MyArrowComponent2 = (props: { name: string | number }) => {
    return (
        <Text>Arrow Component 2 {props.name}</Text>
    )
}
const MyPropsExample = ({name, age}) => {
    return (
        <Text>check{name} age is {age}</Text>
    )
}
const ArrayPropsExample = ({skills}) => {
    return (
        <View>
            {
                skills.map((item, index) => (
                    <Text key={index}>skill is {item}</Text>
                ))
            }
        </View>
    )
}
const ObjectPropsExample = ({userObj}) => {
    return (

        <View>
            <Text>{userObj.name}</Text>
            <Text>{userObj.age}</Text>
        </View>
    )
}
const MyPropsFuction = ({propPress}) => {
    return (<View>
        <Button title="Hello" onPress={propPress}/>
    </View>)
}
// Using States example
const MystatesExample = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text> {count}</Text>
            <Button title="Increase" onPress={() => {
                setCount((preCount) => {
                    return preCount = preCount + 1
                })
            }}/>
        </View>
    )
}
const MyEventHandle = () => {
    const onPress = () => {
        console.log("onPress")
    }
    return (
        <View>
            <Text onPress={onPress}> press</Text>
        </View>
    )
}
const MyEventConditionRenderling = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <View>
            <Button title={isLoggedIn ? 'LogOut' : 'LogIn'} onPress={()=>{
                setIsLoggedIn((prevState)=>{
                  return    !prevState
                })
            }}/>
            {isLoggedIn? <Text>Hello welcome</Text>: <Text>Please log in</Text>}
        </View>
    )
}
export default FunctionalComponents