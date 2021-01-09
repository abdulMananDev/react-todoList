import React from "react";
const FlashMessages = props => {
  return (
    <div className="flash-message">
      <span>{props.message}</span>
    </div>
  );
};
export default FlashMessages;
