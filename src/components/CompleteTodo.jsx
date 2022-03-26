import React from "react";

export const CompleteTodo = ({ completeTodos, onClickBack }) => {
  const areaStyle = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "4px"
  };

  return (
    <div style={areaStyle} className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {completeTodos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
