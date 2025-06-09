import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">All Bookings</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Guest</th>
              <th>Room</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.guest}</td>
                  <td>{booking.room}</td>
                  <td>{booking.checkin}</td>
                  <td>{booking.checkout}</td>
                  <td>
                    <span className={`badge ${booking.status ? 'bg-success' : 'bg-danger'}`}>
                      {booking.status ? 'Paid' : 'Unpaid'}
                    </span>
                  </td>
                  <td>
                    <Link to={`/edit/${booking.id}`} className="btn btn-sm btn-warning">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBookings;
