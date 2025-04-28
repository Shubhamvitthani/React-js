import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useRef } from 'react'
import React from 'react'
const Form = () => {
    const name = useRef("")
    const email = useRef("")
    const pass = useRef("")

    const userForm = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(pass.current.value);


    }
    return (
        <div align="center">
            <h1 className='mb-4 mt-3'>Form</h1>
            <form onSubmit={userForm}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" ref={name} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td> <input type="email" ref={email} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" ref={pass} /></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <input className="btn btn-dark m-2" type="Submit" />
                            </td>
                        </tr>
                </tbody>
            </table>
        </form>
        </div >
    )
}

export default Form
