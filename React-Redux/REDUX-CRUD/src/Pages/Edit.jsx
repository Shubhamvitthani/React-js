import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_User } from '../Redux/Action/CrudAction';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleUser = useSelector(state => state.add.single);

    const [formInput, setFormInput] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (singleUser) {
            setFormInput(singleUser);
        }
    }, [singleUser]);

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update_User(formInput));
        alert('User Updated');
        navigate('/view'); 
    };

    return (
        <div align="center">
            <h2>EDIT USER</h2>
            <form onSubmit={handleSubmit}>
               <table className="table table-bordered w-50 mx-auto mt-4">
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td><input type="text" name="name" value={formInput.name} onChange={handleChange} placeholder="Name" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td> <input type="email" name="email" value={formInput.email} onChange={handleChange} placeholder="Email" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td> <input type="password" name="password" value={formInput.password} onChange={handleChange} placeholder="Password" required /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn btn-primary">Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Edit;
