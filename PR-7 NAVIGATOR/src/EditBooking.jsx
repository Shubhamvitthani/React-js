import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    guest: '',
    room: '',
    checkin: '',
    checkout: '',
    status: false
  });

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const selectedBooking = storedBookings.find((booking, index) => index.toString() === id);

    if (selectedBooking) {
      setForm(selectedBooking);
    } else {
      alert('Booking not found!');
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const updatedBookings = storedBookings.map((booking, index) =>
      index.toString() === id ? form : booking
    );

    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h3 className="mb-3">Edit Booking</h3>
      <input
        className="form-control mb-2"
        name="guest"
        value={form.guest}
        onChange={handleChange}
        placeholder="Guest Name"
      />
      <select
        className="form-control mb-2"
        name="room"
        value={form.room}
        onChange={handleChange}
      >
        <option value="">Select Room</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
        <option value="Standard">Standard</option>
      </select>
      <input
        className="form-control mb-2"
        type="date"
        name="checkin"
        value={form.checkin}
        onChange={handleChange}
      />
      <input
        className="form-control mb-2"
        type="date"
        name="checkout"
        value={form.checkout}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          name="status"
          checked={form.status}
          onChange={handleChange}
          id="paidStatus"
        />
        <label className="form-check-label" htmlFor="paidStatus">
          Paid?
        </label>
      </div>
      <button className="btn btn-success">Update Booking</button>
    </form>
  );
}

export default EditBooking;
