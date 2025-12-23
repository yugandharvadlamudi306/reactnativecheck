import {Text, View} from "react-native";

function ArrayMethodsExample() {
    const arrayValue = ['a', 'b', 'c', 'd', 'a']
    var check = arrayValue.filter((item, index, arrayValue) => {
        return item === 'a'
    })

    var findChar = arrayValue.find((item, index, arrayValue) => {
        return item === 'a'
    })
    var reduce = arrayValue.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 'b')
    var some = arrayValue.some((item, index) => {
        return item === 'a'
    })
    var every =arrayValue.every((item,index,arrayValue)=>{
        return item ==='a'
    })
  arrayValue.sort((item1,item2)=>item2.localeCompare(item1))
    return (
        <View>
            {
                // You don't need the 'array' argument here.
                // 'item' is already the value you want.
                arrayValue.map((item, index) => (
                    <Text key={index}>
                        {item}
                    </Text>
                ))
            }
            {<View>
                <Text>
                    {check}
                </Text>
                <Text>
                    {findChar}
                </Text>
                <Text>
                    reduce Example {reduce}
                </Text>
                <Text>
                    some Example {String(some)}
                </Text>
                <Text>
                    every example {String(every)}
                </Text>
                <Text>
                    sort example {arrayValue}
                </Text>
            </View>

            }

        </View>
    )
}


export default ArrayMethodsExample;