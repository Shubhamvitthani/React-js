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
    paid: false
  });

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.id === parseInt(id));
    if (booking) setForm(booking);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updated = bookings.map(b => b.id === parseInt(id) ? form : b);
    localStorage.setItem('bookings', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <h3 className="mb-4 text-center">Edit Booking</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Guest Name</label>
          <input
            type="text"
            name="guest"
            value={form.guest}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Room Type</label>
          <select
            name="room"
            value={form.room}
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Check-In</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label className="form-label">Check-Out</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="paid"
            checked={form.paid}
            onChange={handleChange}
          />
          <label className="form-check-label">Paid?</label>
        </div>

        <button className="btn btn-primary w-100 btn-custom">
          Add Booking
        </button>
      </form>
    </div>

  );
}

export default EditBooking;
