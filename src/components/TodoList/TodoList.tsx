import { FormEvent } from "react";
import classes from "./todolist.module.scss";
import { ToDo } from "../../utils/types";

type TodoListProps = {
  completeTodo: (id: string) => void;
  changeTodo: (e: EventTarget) => void;
  addTodo: (e: FormEvent<HTMLFormElement>) => void;
  todos: ToDo[];
};

export default function TodoList({
  addTodo,
  changeTodo,
  completeTodo,
  todos,
}: TodoListProps) {
  console.log("todo render");

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

