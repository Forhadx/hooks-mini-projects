import { useReducer } from "react";
import CounterContext from "./Counter-context";
import Reducer from "./Reducer";

const initialState = {
    output: 0,
};

const CounterProvider = (props) => {
    const [countState, dispatch] = useReducer(Reducer, initialState);

    const onIncrement = (val) => {
        dispatch({ type: "INCREMENT", val: val });
    };

    const onDecrement = (val) => {
        dispatch({ type: "DECREMENT", val: val });
    };

    const onReset = () => {
        dispatch({ type: "RESET" });
    };

    const counterContext = {
        output: countState.output,
        increment: onIncrement,
        decrement: onDecrement,
        reset: onReset,
    };

    return (
        <CounterContext.Provider value={counterContext}>
            {props.children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
