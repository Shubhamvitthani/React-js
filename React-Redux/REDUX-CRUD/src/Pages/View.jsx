import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { delete_User, edit_user } from '../Redux/Action/CrudAction';

function View() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.add.users);

    const handleDelete = (id) => {
        dispatch(delete_User(id));
        alert("Record Deleted");
    };

    const handleEdit = (id) => {
        dispatch(edit_user(id));
        navigate('/edit');
    };

    return (
        <div align="center">
            <h2 className='mb-5 mt-4'>VIEW-DATA</h2>
            <Link to="/">Add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, i) => (
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>
                                <button onClick={() => handleDelete(val.id)}>Delete</button>&nbsp;&nbsp;
                                <button onClick={() => handleEdit(val.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default View;
