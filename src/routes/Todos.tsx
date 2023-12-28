import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TodoList from "../components/TodoList/TodoList";

export default function Todos() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <Navbar />
      <main>
        <TodoList />
      </main>
      <Sidebar />
    </div>
  );
}

