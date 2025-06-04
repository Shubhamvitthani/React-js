import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingManager.css';


function BookingManager() {
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        room: '',
        price: '',
        status: '',
        checkin: '',
        checkout: '',
        payment: ''
    });

    const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setBookingData(data);
    setSubmitted(true);
    console.log("Booking Data Submitted:", data);

    e.target.reset();
};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: checked ? e.target.value : ''
        }));
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    const handleDelete = () => {
        setBookingData({
            name: '',
            email: '',
            room: '',
            price: '',
            status: '',
            checkin: '',
            checkout: '',
            payment: ''
        });
        setSubmitted(false);
    };

    return (
        <div align="center">
            <h1>Room Booking</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td><strong>Guest Name</strong></td>
                            <td>
                                <input type="text" name="name" placeholder="Enter Name" value={bookingData.name} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Guest Email</strong></td>
                            <td>
                                <input type="email" name="email" placeholder="Enter Email" value={bookingData.email} onChange={handleChange} />
                            </td>
                        </tr>
                    <tr>
                        <td><strong>Room No</strong></td>
                        <td>
                            <input
                                type="number"
                                name="room"
                                placeholder="Enter Room Number"
                                value={bookingData.room}
                                onChange={handleChange}
                                min="1"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Room Price</strong></td>
                        <td>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter Price"
                                value={bookingData.price}
                                onChange={handleChange}
                                min="1"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><strong>Room Status</strong></td>
                        <td>
                            <select name="status" value={bookingData.status} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Available">Available</option>
                                <option value="Occupied">Occupied</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Check-IN Date</strong></td>
                        <td>
                            <input type="date" name="checkin" value={bookingData.checkin} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Check-OUT Date</strong></td>
                        <td>
                            <input type="date" name="checkout" value={bookingData.checkout} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Payment Status</strong></td>
                        <td>
                            <label style={{ marginRight: '15px' }}>
                                <input type="checkbox" name="payment" value="paid" checked={bookingData.payment === 'paid'} onChange={handleCheckboxChange} /> Paid
                            </label>
                            <label>
                                <input type="checkbox" name="payment" value="unpaid" checked={bookingData.payment === 'unpaid'} onChange={handleCheckboxChange} /> Unpaid
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

            {
        submitted && (
            <div style={{ marginTop: '30px' }}>
                <h2>Booking Summary</h2>
                <table align="center" border={1} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room No</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Math.floor(Math.random() * 1000)}</td>
                            <td>{bookingData.name}</td>
                            <td>{bookingData.email}</td>
                            <td>{bookingData.room}</td>
                            <td>{bookingData.price}</td>
                            <td>{bookingData.status}</td>
                            <td>{bookingData.checkin}</td>
                            <td>{bookingData.checkout}</td>
                            <td>{bookingData.payment}</td>
                            <td>
                                <button onClick={handleEdit} style={{ marginRight: '8px' }}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
        </div >
    );
}

export default BookingManager;
