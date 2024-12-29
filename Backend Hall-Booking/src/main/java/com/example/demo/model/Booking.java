package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings") // Map to the "bookings" table in the database
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment for the primary key
    private int id;

    @Column(name = "applicant_name", nullable = false, length = 100) // Maps to "applicant_name" column
    private String applicantName;

    @Column(name = "email", nullable = false, length = 100) // Maps to "email" column
    private String email;

    @Column(name = "mobile", nullable = false, length = 15) // Maps to "mobile" column
    private String mobile;

    @Column(name = "start_date") // Maps to "start_date" column
    @Temporal(TemporalType.DATE) // Handle Date field
    private Date startDate;

    @Column(name = "end_date") // Maps to "end_date" column
    @Temporal(TemporalType.DATE) // Handle Date field
    private Date endDate;

    @Column(name = "hall", nullable = false, length = 100) // Maps to "hall" column
    private String hall;

    @Column(name = "status", length = 20) // Maps to "status" column
    private String status;

    @Column(name = "application_no", length = 20) // Maps to "application_no" column
    private String applicationNo;

    @Column(name = "remarks") // Maps to "remarks" column
    private String remarks;

    @Column(name = "rent") // Maps to "rent" column
    private double rent;

    @Column(name = "additional_charges") // Maps to "additional_charges" column
    private double additionalCharges;

    // Getter and Setter methods for all fields

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getHall() {
        return hall;
    }

    public void setHall(String hall) {
        this.hall = hall;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public double getRent() {
        return rent;
    }

    public void setRent(double rent) {
        this.rent = rent;
    }

    public double getAdditionalCharges() {
        return additionalCharges;
    }

    public void setAdditionalCharges(double additionalCharges) {
        this.additionalCharges = additionalCharges;
    }
}
