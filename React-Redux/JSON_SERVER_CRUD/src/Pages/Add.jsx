import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_DATA } from '../Redux/Action/crudAction.js'



function Add() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''

    })

    const changInput = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("formInput", formInput);
        dispatch(ADD_DATA(formInput))

        alert("Data Submited")
        navigate('/view')
        setFormInput({
            name: '',
            email: '',
            password: ''
        })
    };

    return (
        <div align="center">
            <h1>Add Data</h1>
            <Link to="/">ADD</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/view">VIEW</Link>
            <br /><br /><br />

            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" value={formInput.name} onChange={changInput} name='name' placeholder='Enter Name' /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" value={formInput.email} onChange={changInput} name='email' placeholder='Enter Email' /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" value={formInput.password} onChange={changInput} name='password' placeholder='Enter Password' /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>

        </div>
    )
}
export default Add
