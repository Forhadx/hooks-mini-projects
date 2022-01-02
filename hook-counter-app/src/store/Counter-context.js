import { createContext } from "react";

const CounterContext = createContext({
    output: 0,
    increment: (val) => {},
    decrement: () => {},
    reset: () => {},
});

export default CounterContext;
