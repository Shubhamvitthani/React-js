import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBooking from './components/AddBooking';
import EditBooking from './components/EditBooking';
import ViewBookings from './components/ViewBookings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // Custom styles

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Hotel Room Booking Manager</h2>
        <div className="mb-3 text-center">
          <Link to="/" className="btn btn-outline-primary mx-2 btn-custom">View Bookings</Link>
          <Link to="/add" className="btn btn-outline-success mx-2 btn-custom">Add Booking</Link>
        </div>
        <Routes>
          <Route path="/" element={<ViewBookings />} />
          <Route path="/add" element={<AddBooking />} />
          <Route path="/edit/:id" element={<EditBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
