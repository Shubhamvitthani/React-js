import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import { FaTrashAlt } from 'react-icons/fa';

const View = () => {
    const [allUsers, setAllUsers] = useState({});

    const viewUsers = () => {
        const db = getDatabase(app);
        const record = ref(db, 'users');
        onValue(record, (row) => {
            const data = row.val();
            setAllUsers(data || {});
        });
    };

    useEffect(() => {
        viewUsers();
    }, []);

    const handleDelete = (id) => {
        const db = getDatabase(app);
        const deleteUser = ref(db, `users/${id}`);
        remove(deleteUser)
            .then(() => {
                alert('User deleted successfully!');
                viewUsers();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="container-fluid px-4 py-5 bg-dark text-white min-vh-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>User Records</h3>
                <Link to="/" className="btn btn-danger">
                    + New Member
                </Link>
            </div>

            {Object.keys(allUsers).length === 0 ? (
                <div className="text-center text-muted py-5 bg-secondary rounded">
                    <h5>📭 No data found</h5>
                </div>
            ) : (
                <div className="table-responsive bg-secondary rounded shadow-sm p-3">
                    <table className="table table-dark table-striped table-hover align-middle text-center">
                        <thead className="table-danger text-white">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(allUsers).map(([key, value], index) => (
                                <tr key={key}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.company || '—'}</td>
                                    <td>{value.contect}</td>
                                    <td>{value.message || '—'}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(key)}
                                            title="Delete"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default View;
