import React, { useState } from "react";
import List from "./components/List";

import "./index.css";
function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    console.log("click");
    setList(prev => prev.concat(input));
    setInput(prev => (prev = ""));
  };
  const handleChange = e => {
    setInput(prev => (prev = e.target.value));
  };
  return (
    <div className="App">
      <h1>ToDoList</h1>
      <input
        type="text"
        name=""
        id="todolist Enter"
        placeholder="Enter Your Memo"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Add</button>
      {list.map((listItem, index) => {
        return (
          <List hello={index} todoValue={listItem} setTodoValue={setList} />
        );
      })}
    </div>
  );
}

export default App;
