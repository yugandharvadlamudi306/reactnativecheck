import {StyleSheet, Text, TextInput, View} from "react-native";
import {useReducer} from "react";


const UseReducerExample = () => {
    const [reducerState, reducerDispacher] = useReducer(reducerFunction, {first: '', last: ''})
    return (
        <View style={sytles.layout}>
            <TextInput placeholder="First Name" onChangeText={(text) => {
                reducerDispacher({type: 'first', value:text})
                console.log(reducerState.first)
            }}/>
            <TextInput placeholder="Last Name" onChangeText={(text) => {
                reducerDispacher({type: 'last',value: text})
                console.log(reducerState.last)
            }}/>
            <Text>{reducerState.first}</Text>

        </View>
    )
}

function reducerFunction(state, action) {
    switch (action.type) {
        case 'first':
            return {...state, first: action.value}
        case 'last':
            return {...state, last: action.value}
        default: return state
    }

}

const sytles = StyleSheet.create({
    layout: {
        marginTop: 30,
        marginStart: 30
    }
})
export default UseReducerExample;