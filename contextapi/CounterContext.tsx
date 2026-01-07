import {createContext, Dispatch, SetStateAction} from "react";

interface CounterContextType {
    counter: number;
    setCount: Dispatch<SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType>({
    counter: 0,
    setCount: () => {},
});
export default CounterContext;
