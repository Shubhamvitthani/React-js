import React from 'react'

const Todo = ({ todo }) => {
  return (
    <>
      <div align="center">
        <h1>Todo List</h1>

        <div className="w-50 mt-5">
          <table className='table table-striped' border={1}>
            <thead>
              <tr>
                <th>id</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {
                todo.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                    </tr>
                  )
                }
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Todo
