package com.example.demo.service;


import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);

        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();

            // Ensure all fields, including rent, are being updated.
            booking.setApplicantName(updatedBooking.getApplicantName());
            booking.setEmail(updatedBooking.getEmail());
            booking.setMobile(updatedBooking.getMobile());
            booking.setStartDate(updatedBooking.getStartDate());
            booking.setEndDate(updatedBooking.getEndDate());
            booking.setHall(updatedBooking.getHall());
            booking.setStatus(updatedBooking.getStatus());
            booking.setApplicationNo(updatedBooking.getApplicationNo());
            booking.setRemarks(updatedBooking.getRemarks());
            booking.setRent(updatedBooking.getRent()); // This is where the error might occur.

            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Booking not found with id: " + id);
        }
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
