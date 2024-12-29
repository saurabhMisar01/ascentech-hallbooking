import React, { useState, useEffect } from 'react';
import { fetchBookings, deleteBooking } from '../services/api';
import BookingForm from './BookingForm';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const loadBookings = async () => {
    try {
      const response = await fetchBookings();
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);
      loadBookings(); // Refresh bookings after deletion
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setEditingBooking(null);
    setShowForm(false);
    loadBookings(); // Refresh bookings after submission
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div>
      <h1>Hall Bookings</h1>
      {showForm ? (
        <BookingForm initialData={editingBooking} onSubmitSuccess={handleFormClose} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Add New Booking</button>
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Rent</th>
                <th>Additional Charges</th>
                <th>Hall</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.applicantName}</td>
                  <td>{booking.email}</td>
                  <td>{booking.mobile}</td>
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                  <td>{booking.rent}</td>
                  <td>{booking.additionalCharges}</td>
                  <td>{booking.hall}</td>
                  <td>{booking.status || 'confirm'}</td>
                  <td>
                    <button onClick={() => handleEdit(booking)}>Edit</button>
                    <button onClick={() => handleDelete(booking.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default BookingTable;
