import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (confirmDelete) {
      const updated = bookings.filter(b => b.id !== id);
      localStorage.setItem('bookings', JSON.stringify(updated));
      setBookings(updated);
      setAlert(true);
      setTimeout(() => setAlert(false), 2000); // hide alert after 2 seconds
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">View All Bookings</h3>

      {alert && (
        <div className="alert alert-success" role="alert">
          Booking deleted successfully!
        </div>
      )}

      <div className="table-responsive bg-white p-4 rounded shadow-sm">
        {bookings.length === 0 ? (
          <p className="text-center text-muted">No bookings found.</p>
        ) : (
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <tr key={item.id}>
                  <td>{item.guest}</td>
                  <td>{item.room}</td>
                  <td>{item.checkin}</td>
                  <td>{item.checkout}</td>
                  <td>
                    {item.paid ? (
                      <span className="badge bg-success">Paid</span>
                    ) : (
                      <span className="badge bg-danger">Unpaid</span>
                    )}
                  </td>
                  <td className="d-flex gap-2">
                    <Link to={`/edit/${item.id}`} className="btn btn-warning btn-sm btn-custom">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger btn-sm btn-custom"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewBookings;
