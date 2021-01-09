import React, { useState, useEffect } from "react";
import FlashMessages from "./FlashMessages";
const List = props => {
  const [flag, setFlag] = useState(0);
  const [updateflag, setUpdateFlag] = useState(0);
  const [updationValue, setUpdationValue] = useState();
  const [index, setIndex] = useState(0);

  const handleComplete = () => {
    setFlag(prev => !prev);
  };

  const handleDelete = e => {
    props.setTodoValue(prev =>
      prev.filter(filterz => {
        return prev.indexOf(filterz) !== +e.target.id;
      })
    );
  };
  const handleUpdate = e => {
    // console.log(e.target.id);

    setIndex(prev => (prev = e.target.id));
    setUpdateFlag(prev => (prev = 1));
    setUpdationValue(prev => (prev = props.todoValue));
  };
  const handleUpdationX = e => {
    console.log("her");
    setUpdationValue(prev => (prev = e.target.value));
  };
  const update = () => {
    if (updationValue === "") {
      return;
    }
    props.setTodoValue(prev => {
      console.log(updationValue);
      prev[index] = updationValue;
      return prev.map(data => {
        return data;
      });
    });
    setUpdationValue(prev => (prev = ""));
    setUpdateFlag(prev => (prev = 0));
  };
  return (
    <>
      <>
        {updateflag ? (
          <div className="update-wrapper">
            <div className="update">
              <input
                type="text"
                className="input"
                placeholder="update-value"
                id=""
                value={updationValue}
                onChange={handleUpdationX}
                spellCheck="false"
                autoFocus
                autoCapitalize
              />

              <button className="update-btn" onClick={update}>
                Update
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </>

      <div className="todoList-wrapper">
        <div className="todoList">
          {flag ? (
            <span
              className="todo-item"
              style={{ textDecoration: "line-through" }}
            >
              {props.todoValue}
            </span>
          ) : (
            <span className="todo-item"> {props.todoValue}</span>
          )}
        </div>
        <div className="todo-controls">
          {!flag ? (
            <button className="update-btn">
              <span id={props.hello} onClick={handleUpdate}>
                Update
              </span>
            </button>
          ) : (
            ""
          )}
          <button className="complete-btn">
            <span onClick={handleComplete}>
              {flag ? "Completed" : "Complete"}
            </span>
          </button>

          {flag ? (
            <button className="delete-btn">
              <span id={props.hello} onClick={handleDelete}>
                Delete
              </span>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default List;
