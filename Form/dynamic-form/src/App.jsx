import { useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [input, setInput] = useState([
    { name: '', salary: '', email: '' }
  ])
  const addForm = () => {
    let newForm = { name: '', salary: '', email: '' }
    setInput([...input, newForm]);
  }
  const handleSubmit = () => {
    console.log(input);
  }
  const changeInput = (index, e) => {
    const { name, value } = e.target;
    const newInput = [...input];
    newInput[index][name] = value;
    setInput(newInput);
    if (name === "name") {
      setTimeout(() => {
        newInput[index][name] = '';
        setInput([...newInput]);
      }, 200);
    }
  };


  return (
    <div align="center">
      <h1 className="mb-5">Dynamic-Form</h1>
      {
        input.map((val, index) => {
          return (
            <>
              <form key={index} className="mb-4">
                <div
                  className="card border-0 shadow-lg rounded-4 mx-auto p-3"
                  style={{ maxWidth: '900px', backgroundColor: '#f8f9fa' }}
                >
                  <div className="card-header bg-gradient text-white rounded-3 mb-3 px-4 py-2 d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(45deg, #4e54c8, #8f94fb)' }}>
                    <h5 className="mb-0 text-dark">📝 Contact #{index + 1}</h5>
                    <button type="button" className="btn btn-sm btn-outline-light" onClick={() => removeInput()}>
                      ✖
                    </button>
                  </div>

                  <div className="card-body px-4">
                    <div className="mb-3 row g-3">
                      <div className="col-4">
                        <div className="d-flex align-items-center border rounded-3 bg-white shadow-sm p-2">
                          <span className="me-2 fs-5">👤</span>
                          <input
                            type="text"
                            className="form-control border-0"
                            name="name"
                            value={val.name}
                            onChange={(e) => changeInput(index, e)}
                            placeholder="Full Name"
                          />
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="d-flex align-items-center border rounded-3 bg-white shadow-sm p-2">
                          <span className="me-2 fs-5">📧</span>
                          <input
                            type="email"
                            className="form-control border-0"
                            name="email"
                            value={val.email}
                            onChange={(e) => changeInput(index, e)}
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="d-flex align-items-center border rounded-3 bg-white shadow-sm p-2">
                          <span className="me-2 fs-5">💰</span>
                          <input
                            type="text"
                            className="form-control border-0"
                            name="salary"
                            value={val.salary}
                            onChange={(e) => changeInput(index, e)}
                            placeholder="Salary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <hr />
            </>
          )
        })
      }
      <input type="button" onClick={() => addForm()} value="Add" className="styled-button" />
      &nbsp;&nbsp;
      <input type="button" onClick={handleSubmit} value="Submit" className="styled-button" />

    </div>
  )
}

export default App
