import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import User from './Componats/User';
function App() {

  let [users, setUsers] = useState([]);
  const getTodos = () => {

    fetch(`https://dummyjson.com/users`)
      .then(res => res.json())
      .then((data) => setUsers(data.users))
  }
  useEffect(() => {
    getTodos();
  }, [])
  return (
    <>
      <User
        users={users}
      />
    </>
  )
}

export default App
