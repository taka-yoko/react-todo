import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "bbbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["ccccc", "ddddd"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDel = (index) => {
    const newTodos = deleteArrayElmByIndex(incompleteTodos, index);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了から削除
    const newInCompleteTodos = deleteArrayElmByIndex(incompleteTodos, index);
    // 完了に追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = deleteArrayElmByIndex(completeTodos, index);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  const deleteArrayElmByIndex = (arr, index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);

    return newArr;
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd} id="add-button">
          追加
        </button>
      </div>
      <div className="incomplete-area">
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
      <div className="complete-area">
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
    </>
  );
};
