import React, { useContext } from "react";
import CounterContext from "../store/Counter-context";

const Result = () => {
    const counterCtx = useContext(CounterContext);

    return <div className="reset">{counterCtx.output}</div>;
};

export default Result;
