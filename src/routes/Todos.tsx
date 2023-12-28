import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TodoList from "../components/TodoList/TodoList";
import { ToDo } from "../utils/types";

const TODO_KEY = "TODOS";

export default function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const lsTodos = localStorage.getItem(TODO_KEY);
    const oldTodos = lsTodos ? JSON.parse(lsTodos) : [];

    return oldTodos;
  });

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newTodo) return;

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

  function completedTodos() {
    return todos.reduce((compTodos: number, curTodo: ToDo) => {
      if (curTodo.completed) return ++compTodos;
      return compTodos;
    }, 0);
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <Navbar finished={completedTodos()} />
      <main>
        <TodoList
          completeTodo={completeTodo}
          changeTodo={changeTodo}
          addTodo={addTodo}
          todos={todos}
        />
      </main>
      <Sidebar />
    </div>
  );
}

