import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { add_Data } from '../Redux/Action/CrudAction'

function Add() {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeInput = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
        console.log(formInput);
        let obj = {
            id: Math.floor(Math.random() * 1000),
            ...formInput,
        }
      dispatch(add_Data(obj))
        setFormInput({
            name: "",
            email: "",
            password: ""
        })
          navigate('/view')
    }
    

    return (
        <div align="center" className="container mt-5 text-center">
            <h2 className='mb-5'>ADD-DATA</h2>
            <Link to='/'>Add</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/view">View</Link>

            <form onSubmit={handleSubmit}>
                <table className="table table-bordered w-50 mx-auto mt-4">
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td><input type="text" onChange={changeInput} name="name" placeholder='Enter Name' className="form-control" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="text" onChange={changeInput} name="email" placeholder='Enter Email' className="form-control" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input type="text" onChange={changeInput} name="password" placeholder='Enter Password' className="form-control" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn btn-primary">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Add
