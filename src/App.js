import React, { useState, useEffect } from "react";
import List from "./components/List";
import FlashMessages from "./components/FlashMessages";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [flashFlag, setFlashFlag] = useState(0);
  const [flashMessage, setFalshMessage] = useState("");
  const addTodo = () => {
    let x = checkDuplicate();
    console.log(x);
    if (x) {
      setFlashFlag(prev => (prev = 1));
      setFalshMessage(prev => (prev = `${input} is Listed `));
      return;
    }
    if (input === "") {
      setFlashFlag(prev => (prev = 1));
      setFalshMessage(prev => (prev = "You Forgot Something !?"));
      return;
    }

    setFlashFlag(prev => (prev = 0));
    console.log("click");
    setList(prev => prev.concat(input));
    setInput(prev => (prev = ""));
  };
  const handleChange = e => {
    setInput(prev => (prev = e.target.value));
  };
  const checkDuplicate = () => {
    console.log(input);
    return list.find(element => element == input);
  };
  return (
    <div className="todo-container">
      {flashFlag ? <FlashMessages message={flashMessage} /> : ""}
      <div className="input-wrapper">
        <span className="heading-primary">Lets's Get It Done!!</span>
        <input
          type="text"
          name=""
          className="input"
          id="todolist Enter"
          placeholder="Jot Down the Goals!!"
          onChange={handleChange}
          value={input}
          spellCheck="false"
          autoFocus
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>
      {list.map((listItem, index) => {
        return (
          <List hello={index} todoValue={listItem} setTodoValue={setList} />
        );
      })}
    </div>
  );
}

export default App;
