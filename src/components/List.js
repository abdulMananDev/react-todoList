import React, { useState } from "react";
const List = props => {
  const [flag, setFlag] = useState(0);
  const [updateflag, setUpdateFlag] = useState(0);
  const [updationValue, setUpdationValue] = useState();
  const [index, setIndex] = useState(0);
  const handleComplete = () => {
    console.log(flag);
    setFlag(prev => (prev = 1));
    console.log(flag);
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
          <div className="update">
            <input
              type="text"
              placeholder="update-value"
              id=""
              value={updationValue}
              onChange={handleUpdationX}
            />

            <button onClick={update}>Update</button>
          </div>
        ) : (
          ""
        )}
      </>
      <div>
        {flag ? (
          <span style={{ textDecoration: "line-through" }}>
            {props.todoValue}
          </span>
        ) : (
          <span> {props.todoValue}</span>
        )}
        <span id={props.hello} onClick={handleUpdate}>
          Update
        </span>
        <span onClick={handleComplete}>{flag ? "completed" : "complete"}</span>
        {flag ? (
          <span id={props.hello} onClick={handleDelete}>
            Delete
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default List;
