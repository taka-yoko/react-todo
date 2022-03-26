import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const isLimiteTodoNum = () => {
    return incompleteTodos.length >= 5;
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        isDisabled={isLimiteTodoNum()}
      />
      {isLimiteTodoNum() && (
        <p style={{ color: "red" }}>登録できるTODOは5個までです</p>
      )}
      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickDel={onClickDel}
        onClickComplete={onClickComplete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
