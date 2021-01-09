import React, { useState, useEffect } from "react";

const List = props => {
  const [flag, setFlag] = useState(false);
  const [updateflag, setUpdateFlag] = useState(0);
  const [updationValue, setUpdationValue] = useState();
  const [index, setIndex] = useState(0);

  const handleComplete = () => {
    setFlag(prev => !prev);
  };

  const handleDelete = e => {
    setFlag(prev => !prev);
    props.setTodoValue(prev =>
      prev.filter(filterz => {
        return prev.indexOf(filterz) !== +e.target.id;
      })
    );
  };
  const handleUpdate = e => {
    setIndex(prev => (prev = e.target.id));
    setUpdateFlag(prev => (prev = 1));
    setUpdationValue(prev => (prev = props.todoValue));
  };
  const handleUpdatedValue = e => {
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
  // useEffect(() => {
  //   if (localStorage.getItem("flags")) {
  //     setFlag(prev => (prev = JSON.parse(localStorage.getItem("flags"))));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("flags", JSON.stringify(flag));
  // }, [flag]);
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
                onChange={handleUpdatedValue}
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
