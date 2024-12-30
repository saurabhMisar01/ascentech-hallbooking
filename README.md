Hall Booking System

Introduction

The Hall Booking System is a web-based application for managing hall bookings. It includes a user-friendly React.js frontend, a robust Java Spring Boot backend, and PostgreSQL for data storage. The application supports CRUD operations, validation, and auto-calculates total charges.

Features

Booking Management: Create, read, update, and delete bookings.
Validation: Ensures fields like email, mobile number, and application number are valid and mandatory.
Dynamic Fields: Auto-calculation of the total based on rent and additional charges.
Status Management: Option to set booking status as "Confirm" or "Pending".

Prerequisites

Node.js (v14 or later)
Java (JDK 11 or later)
PostgreSQL (database)
Maven (for Java dependencies)
Git (for version control)
Installation and Setup

Backend Setup
  cd backend  
Configure the PostgreSQL database in application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/hall_booking  
spring.datasource.username=<your-username>  
spring.datasource.password=<your-password>  
Run the backend using Maven:
mvn spring-boot:run  
Confirm the backend is running on http://localhost:8080.

Database Setup
Create a PostgreSQL database:
CREATE DATABASE hall_booking;  
Create the bookings table:
CREATE TABLE bookings (  
    id SERIAL PRIMARY KEY,  
    applicant_name VARCHAR(100),  
    email VARCHAR(100),  
    mobile VARCHAR(15),  
    start_date DATE,  
    end_date DATE,  
    rent NUMERIC,  
    additional_charges NUMERIC,  
    hall VARCHAR(100),   
    status VARCHAR(20),  
    application_no VARCHAR(20) NOT NULL,  
    remarks TEXT  
);  

Frontend Setup
Navigate to the frontend directory:
cd frontend  
Install dependencies:
npm install  
Create a .env file in the frontend directory with the following content:
REACT_APP_API_URL=http://localhost:8080/api  
Start the frontend development server:
npm start  
Application Usage

Access the frontend: Open http://localhost:3000 in your browser.
Create a booking: Fill out the booking form with details such as applicant name, email, hall, etc., and click "Submit".
View bookings: The booking list displays all stored entries.
Update or delete bookings: Edit or remove bookings directly from the list.
Validation Rules

Mobile: Must be a valid 10-digit number.
Email: Must follow standard email format.
Application Number: Mandatory and unique for each booking.
Status: Can only be "Confirm" or "Pending".
Notes

The backend server must be running for the frontend to work.
Verify database entries using the following SQL query:
SELECT * FROM bookings;  
If the database or backend server is shut down, the application will not function.
API Endpoints
