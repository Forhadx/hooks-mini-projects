import React, { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  Users: [],
  uId: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        Users: state.Users.concat({ ...action.data, id: state.uId + 1 }),
        uId: state.uId + 1,
      };
    case "DELETE_USER":
      return {
        Users: state.Users.filter((x) => x.id !== action.id),
        uId: state.uId /** use uId for avoiding the error  */,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const addUserHandler = () => {
    const data = {
      name: name,
      salary: salary,
    };
    dispatch({ type: "ADD_USER", data: data });
    setName("");
    setSalary("");
  };

  const deleteUserHandler = (id) => {
    dispatch({ type: "DELETE_USER", id: id });
  };

  // console.log("s: ", state);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        placeholder="enter salary"
        onChange={(e) => setSalary(e.target.value)}
        value={salary}
      />
      <button onClick={addUserHandler}>ADD</button>
      <hr />
      <h4>User list</h4>
      <ul>
        <li>
          <span>Name</span>
          <span>Salary</span>
          <span></span>
        </li>
        {state.Users.map((u) => (
          <li key={u.id}>
            <span>{u.name}</span>
            <span>{u.salary}</span>
            <button onClick={() => deleteUserHandler(u.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
