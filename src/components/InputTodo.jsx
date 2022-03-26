import React from "react";

export const InputTodo = ({ todoText, onChange, onClick, isDisabled }) => {
  const inputStyle = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "4px"
  };

  return (
    <div style={inputStyle} className="input-area">
      <input
        id="add-text"
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={isDisabled}
      />
      <button onClick={onClick} disabled={isDisabled} id="add-button">
        追加
      </button>
    </div>
  );
};
