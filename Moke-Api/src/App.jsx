import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react"
function App() {
  const [users, setUsers] = useState([])
  const getApi = () => {
    fetch(`http://localhost:8000/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
          .then((data) => setUsers(users))
      })
  }
  useEffect(() => {
    getApi();
  }, [])

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <h1 align="center">Moke-Api</h1>
        {
          users.map((val, i) => {
            return (
              <div className="col-md-6 mb-3">
                <div className="card">
                  <img src={val.image} className="card-img-top p-3" style={{ width: "300px" }} />
                  <div className="card-body">
                    <h6>id : {val.id}</h6>
                    <h3 className="card-title">{val.name}</h3>
                    <h6>{val.email}</h6>
                    <h6>UserName : {val.username}</h6>
                    <h6>password : {val.password}</h6>
                    <h6>created_at : {val.created_at}</h6>
                    <h6>updated_at : {val.updated_at}</h6>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App
