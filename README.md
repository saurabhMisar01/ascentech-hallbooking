Hall Booking System

Overview

The Hall Booking System is a web-based application designed to manage hall bookings. It allows users to create, view, update, and delete bookings with

key features like auto-calculating total charges, managing application statuses, and validating user inputs.

This application is built using React.js for the frontend, Java Spring Boot for the backend, and PostgreSQL as the database.




Features
Booking Management: Create, view, update, and delete hall bookings.

Auto-Calculation: Automatically calculate the total charges based on rent and additional charges.

Predefined Hall Names: Options include Budhavihar, Nagarbhavan, and Padmabhusan."


Prerequisites

Node.js (v14 or later)

Java JDK (v11 or later)

PostgreSQL (v12 or later)

Maven (for Spring Boot)
Setup Instructions
Backend Setup
Clone the repository:
bash
Copy code
git clone <repository-url>
cd <repository-directory>


Navigate to the backend folder:
bash
Copy code
cd backend


Update the application.properties file with your PostgreSQL credentials:
properties
Copy code

spring.datasource.url=jdbc:postgresql://localhost:5432/

hall_booking

spring.datasource.username=<your-username>
spring.datasource.password=<your-password>

Build and run the Spring Boot application:

bash
Copy code

mvn spring-boot:run


Verify the backend is running at http://localhost:8080.

Database Setup

Create a PostgreSQL database named hall_booking:
sql
Copy code

CREATE DATABASE hall_booking;


Run the following SQL script to create the bookings table:
sql

Copy code

CREATE TABLE bookings
 (
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


To verify entries in PostgreSQL,
run:

sql

Copy code

SELECT * FROM bookings;

Frontend Setup

Navigate to the frontend folder:
bash

Copy code

cd frontend

1.Install the required dependencies:

bash
Copy code
npm install

Create a .env file in the frontend directory with the following content:
env
Copy code

REACT_APP_API_URL=http://localhost:8080/api

2.Start the development server:

bash
Copy code
npm start

Open the application in your browser at http://localhost:3000.
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

Usage

Fill in the booking form with required details, including:

Mobile number

Hall name

Applicant name

Email

Purpose

Rent

Additional charges

Status (Confirm or Pending)

Remarks (optional)

Submit the form to create a booking.

View, update, or delete existing bookings as needed.
API Endpoints

Base URL
http://localhost:8080/api/bookings

Method
Endpoint

Description

GET
/
Fetch all bookings

POST
/
Create a new booking

PUT
/{id}
Update an existing booking

DELETE
/{id}
Delete a booking

Validation Rules

Mobile Number: Must be a valid 10-digit number.

Email: Must be a valid email address.

Rent: Required and must be numeric.

Hall Name: Required and must be one of the predefined options.

Status: Must be either "Confirm" or "Pending."

Notes

Ensure the backend is running before starting the frontend.

The application will not function if the backend or database is not operational.

To make the application more robust, consider handling errors gracefully in both frontend and backend.

