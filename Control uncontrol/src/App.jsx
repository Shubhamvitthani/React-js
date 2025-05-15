import React, { useState } from "react";

// Generate numeric random ID (e.g., 6-digit number)
const generateNumericId = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
};

const App  = () => {
  const [taskText, setTaskText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddOrUpdate = () => {
    if (taskText.trim() === "") return;

    if (editingId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: taskText } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo = {
        id: generateNumericId(),
        text: taskText,
      };
      setTodos([...todos, newTodo]);
    }

    setTaskText("");
  };

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTaskText(todo.text);
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (editingId === id) {
      setTaskText("");
      setEditingId(null);
    }
  };

  return (
    <div align="center" style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 Todo - List</h2>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter task"
        style={{ width: "70%", padding: "8px", marginRight: "5px" }}
      />
      <button onClick={handleAddOrUpdate}>
        {editingId !== null ? "Update" : "Add"}
      </button>

      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none", margin: "10px 0" }}>
            <strong>ID:</strong> {todo.id}<br />
            <span>{todo.text}</span>
            <button onClick={() => handleEdit(todo.id)} style={{ marginLeft: "10px" }}>Edit</button>
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: "5px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
