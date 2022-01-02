import React, { useContext } from "react";
import CounterContext from "../store/Counter-context";

const Inputs = () => {
    const counterCtx = useContext(CounterContext);

    const incrementHandler = () => {
        counterCtx.increment(5);
    };

    const decrementHandler = () => {
        counterCtx.decrement(4);
    };

    const resetHandler = () => {
        counterCtx.reset();
    };

    return (
        <div>
            <button onClick={incrementHandler}>INC +5</button>
            <button onClick={decrementHandler}>DEC -4</button>
            <button onClick={resetHandler}>RESET</button>
        </div>
    );
};

export default Inputs;
