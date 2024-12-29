import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createBooking, updateBooking } from '../services/api';
import './BookingForm.css'; // Import CSS for styling

const BookingForm = ({ initialData = null, onSubmitSuccess }) => {
  const [total, setTotal] = useState(0);

  const formik = useFormik({
    initialValues: {
      mobile: initialData?.mobile || '',
      hall: initialData?.hall || '',
      applicantName: initialData?.applicantName || '',
      email: initialData?.email || '',
      purpose: initialData?.purpose || '',
      rent: initialData?.rent || 0,
      additionalCharges: initialData?.additionalCharges || 0,
      total: total || 0,
      startDate: initialData?.startDate || '',
      endDate: initialData?.endDate || '',
      remarks: initialData?.remarks || '',
    },
    validationSchema: yup.object({
      mobile: yup.string().required('Mobile No. is required').matches(/^\d{10}$/, 'Must be a valid 10-digit number'),
      hall: yup.string().required('Hall Name is required'),
      applicantName: yup.string().required('Applicant Name is required'),
      email: yup.string().email('Invalid email format').required('Email is required'),
      rent: yup.number().required('Rent is required'),
      additionalCharges: yup.number(),
      startDate: yup.date().required('Start Date is required'),
      endDate: yup.date()
        .required('End Date is required')
        .min(yup.ref('startDate'), 'End Date cannot be earlier than Start Date'),
    }),
    onSubmit: async (values) => {
      try {
        if (initialData) {
          await updateBooking(initialData.id, values);
        } else {
          await createBooking(values);
        }
        onSubmitSuccess();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  // Auto-update total field
  React.useEffect(() => {
    const calculatedTotal = parseFloat(formik.values.rent || 0) + parseFloat(formik.values.additionalCharges || 0);
    setTotal(calculatedTotal);
    formik.setFieldValue('total', calculatedTotal);
  }, [formik.values.rent, formik.values.additionalCharges]);

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      <h2>Booking Form</h2>

      <label>Mobile No.</label>
      <input
        name="mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={formik.touched.mobile && formik.errors.mobile ? 'error' : ''}
      />
      {formik.touched.mobile && formik.errors.mobile && <div className="error-message">{formik.errors.mobile}</div>}

      <label>Hall Name</label>
      <select
        name="hall"
        value={formik.values.hall}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={formik.touched.hall && formik.errors.hall ? 'error' : ''}
      >
        <option value="">-- Select Option --</option>
        <option value="Budhavihar">Budhavihar</option>
        <option value="Nagarbhavan">Nagarbhavan</option>
        <option value="Padmabhusan">Padmabhusan</option>
      </select>
      {formik.touched.hall && formik.errors.hall && <div className="error-message">{formik.errors.hall}</div>}

      <label>Applicant Name</label>
      <input
        name="applicantName"
        value={formik.values.applicantName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.applicantName && formik.errors.applicantName && (
        <div className="error-message">{formik.errors.applicantName}</div>
      )}

      <label>Email</label>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && <div className="error-message">{formik.errors.email}</div>}

      <label>Start Date</label>
      <input
        name="startDate"
        type="date"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.startDate && formik.errors.startDate && <div className="error-message">{formik.errors.startDate}</div>}

      <label>End Date</label>
      <input
        name="endDate"
        type="date"
        value={formik.values.endDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.endDate && formik.errors.endDate && <div className="error-message">{formik.errors.endDate}</div>}

      <label>Purpose</label>
      <input
        name="purpose"
        value={formik.values.purpose}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label>Rent</label>
      <input
        name="rent"
        type="number"
        value={formik.values.rent}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rent && formik.errors.rent && <div className="error-message">{formik.errors.rent}</div>}

      <label>Additional Charges</label>
      <input
        name="additionalCharges"
        type="number"
        value={formik.values.additionalCharges}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label>Total</label>
      <input name="total" type="number" value={total} readOnly />

      <label>Remarks</label>
      <textarea
        name="remarks"
        value={formik.values.remarks}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
