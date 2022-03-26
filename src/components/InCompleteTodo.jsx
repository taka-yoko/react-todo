import React from "react";

export const InCompleteTodo = ({
  incompleteTodos,
  onClickComplete,
  onClickDel
}) => {
  const areaStyle = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "4px"
  };

  return (
    <div style={areaStyle} className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
