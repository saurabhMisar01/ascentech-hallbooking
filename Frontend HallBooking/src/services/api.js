import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchBookings = () => axios.get(`${API_URL}/bookings`);
export const createBooking = (booking) => axios.post(`${API_URL}/bookings`, booking);
export const updateBooking = (id, booking) => axios.put(`${API_URL}/bookings/${id}`, booking);
export const deleteBooking = (id) => axios.delete(`${API_URL}/bookings/${id}`);
