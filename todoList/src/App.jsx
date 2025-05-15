import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Todo from './Todo';
function App() {
  let [todolist, settodoList] = useState([
    { id: 1, name: "reading", },
    { id: 2, name: "playing" },
    { id: 3, name: "sleeping" }
  ]);

  return (
    <>
      <Todo
        todo={todolist}
      />
    </>
  )
}

export default App
