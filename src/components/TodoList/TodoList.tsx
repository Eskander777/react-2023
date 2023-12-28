import { useEffect, useState } from "react";
import classes from "./todolist.module.scss";

type ToDo = {
  id: string;
  name: string;
  completed: boolean;
};

const TODO_KEY = "TODOS";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const lsTodos = localStorage.getItem(TODO_KEY);
    const oldTodos = lsTodos ? JSON.parse(lsTodos) : [];

    return oldTodos;
  });

  console.log("todo render");

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), name: newTodo, completed: false },
    ]);
  }

  function changeTodo(e: EventTarget) {
    const target = e as HTMLInputElement;
    const inputVal = target.value;

    setNewTodo(inputVal);
  }

  function completeTodo(id: string) {
    setTodos((prevTodos) => {
      const updatedTodoIdx = prevTodos.findIndex((todo) => todo.id === id);
      const updatedTodo = {
        ...prevTodos[updatedTodoIdx],
        completed: !prevTodos[updatedTodoIdx].completed,
      };
      const updatedTodos = [...prevTodos];
      updatedTodos[updatedTodoIdx] = updatedTodo;

      return updatedTodos;
    });
  }

  useEffect(() => {
    const todosToSet = JSON.stringify([...todos]);

    localStorage.setItem(TODO_KEY, todosToSet);
  }, [todos]);

  return (
    <div className={classes["todolist"]}>
      <h2>New Task</h2>
      <form onSubmit={addTodo}>
        <input type="text" onInput={(e) => changeTodo(e.target)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
                name={todo.id}
                id={todo.id}
              />
              <label htmlFor={todo.id}>{todo.name}</label>
            </li>
          ))}
      </ul>
    </div>
  );
}

