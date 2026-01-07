import NameContext from "./ContextApiChecking.tsx";
import ConsumingContext from "./ConsumingContext.tsx";

const ContextProvider = () => {
    return (
        <NameContext.Provider value="yugandhar">
            <ConsumingContext/>
        </NameContext.Provider>
    )
}
export default ContextProvider;