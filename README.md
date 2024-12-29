Hall Booking System
Description
This application is a Hall Booking System that enables users to book halls for events or purposes. It is built using the following technologies:
Backend: Java Spring Boot
Frontend: React.js
Database: PostgreSQL
Architecture: Microservices
The application provides a form-based user interface to create and manage bookings, complete with validation and automated calculations.

Features
Functional Features
Booking Form:
Fields include:
Mobile Number (Mandatory, 10-digit validation)
Hall Name (Mandatory, predefined options)
Applicant Name (Mandatory)
Email (Mandatory, email format validation)
Purpose
Rent (Mandatory)
Additional Charges
Total (Auto-calculated)
Start Date (Mandatory, must precede End Date)
End Date (Mandatory)
Remarks
Application No. (Mandatory, unique identifier)
Status (Options: Confirm, Pending)
Validation:
Input fields include client-side and server-side validation using Formik and Yup.
Auto Calculation:
The "Total" field is auto-calculated as the sum of Rent and Additional Charges.
Dynamic Field Updates:
Status options include "Confirm" and "Pending."
Error Handling:
Proper error messages are displayed for invalid inputs.
Database Integration:
Bookings are stored and managed in a PostgreSQL database.
Technical Features
React.js Frontend:
Formik is used for form handling.
CSS for professional UI styling.
Spring Boot Backend:
RESTful API endpoints for creating and managing bookings.
Validation and business logic are implemented.
PostgreSQL Database:
Persistent storage for booking records.
Docker Support:
Docker configurations for backend and database setup.
Microservices Architecture:
Decoupled services for scalability and maintainability.

Installation and Setup
Prerequisites
Node.js (v16 or higher)
Java (JDK 11 or higher)
PostgreSQL (v13 or higher)
Docker (optional, for containerized deployment)
Backend Setup
Clone the repository:
git clone https://github.com/yourusername/hall-booking-system.git
cd hall-booking-system/backend
Configure PostgreSQL:
Update the application.properties file in the src/main/resources folder with your database credentials:
spring.datasource.url=jdbc:postgresql://localhost:5432/hall_booking
spring.datasource.username=your_username
spring.datasource.password=your_password
Run the backend application:
./mvnw spring-boot:run
Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install
Start the development server:
npm start
Docker Setup (Optional)
Build Docker images for backend and database:
docker-compose up --build
Access the application at http://localhost:3000.

API Endpoints
Booking API
Create Booking
Endpoint: POST /api/bookings
Request Body:
{
  "mobile": "9876543210",
  "hall": "Budhavihar",
  "applicantName": "John Doe",
  "email": "johndoe@example.com",
  "purpose": "Wedding",
  "rent": 10000,
  "additionalCharges": 2000,
  "startDate": "2024-01-01",
  "endDate": "2024-01-02",
  "remarks": "N/A",
  "applicationNo": "APP12345",
  "status": "Pending"
}
Update Booking
Endpoint: PUT /api/bookings/{id}
Fetch Bookings
Endpoint: GET /api/bookings

Directory Structure
/hall-booking-system
├── backend
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── BookingForm.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   └── App.js
│   └── package.json
└── docker-compose.yml

Testing
Unit tests for backend APIs are included in the backend/src/test directory.
Run backend tests using:
./mvnw test

Contributing
Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a Pull Request.



