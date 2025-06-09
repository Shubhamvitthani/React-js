import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBooking() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    guest: '',
    room: '',
    checkin: '',
    checkout: '',
    status: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add new booking with a unique ID
    const newBooking = {
      ...form,
      id: Date.now()
    };

    // Save back to localStorage
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

    // Redirect after saving
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light" style={{ maxWidth: '500px', margin: '30px auto' }}>
      <h3 className="mb-3 text-center">Add Booking</h3>

      <input
        className="form-control mb-3"
        type="text"
        name="guest"
        value={form.guest}
        placeholder="Guest Name"
        onChange={handleChange}
        required
      />

      <select
        className="form-control mb-3"
        name="room"
        value={form.room}
        onChange={handleChange}
        required
      >
        <option value="">-- Select Room Type --</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
        <option value="Standard">Standard</option>
      </select>

      <input
        className="form-control mb-3"
        type="date"
        name="checkin"
        value={form.checkin}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="date"
        name="checkout"
        value={form.checkout}
        onChange={handleChange}
        required
      />

      <div className="form-check mb-3">
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

      <button className="btn btn-primary w-100" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddBooking;
