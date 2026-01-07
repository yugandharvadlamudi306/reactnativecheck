import CounterContext from "./CounterContext.tsx";
import {useState} from "react";
import CounterContextConsumer from "./CounterContextConsumer.tsx";

const CounterContextProvider = ()=>{
    const [counter,setCount] = useState(1)
    return(
        <CounterContext.Provider value={{counter,setCount}}>
            <CounterContextConsumer/>
        </CounterContext.Provider>
    )

}
export default CounterContextProvider;
