const Reducer = (state, action) => {
    // console.log("state: ", state); // {output: 0}
    // console.log("action", action); // { type: "INCREMENT", val: val }

    switch (action.type) {
        case "INCREMENT":
            return {
                output: state.output + action.val,
            };
        case "DECREMENT":
            return {
                output: state.output - action.val,
            };
        case "RESET":
            return {
                output: 0,
            };
        default:
            return state;
    }
};

export default Reducer;
