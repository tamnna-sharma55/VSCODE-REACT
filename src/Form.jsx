import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", fatherName: "", gender: "",
    mobile: "", emergencyPhone: "", email: "", street: "",
    city: "", state: "", pincode: "", collegeName: "", degree: "",
    technology: "", course: "", date: "", downPayment: "", registrationFees: "", totalFees: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    const dp = parseFloat(form.downPayment) || 0;
    const rf = parseFloat(form.registrationFees) || 0;
    const total = dp + rf;
    setForm((prev) => ({ ...prev, totalFees: total.toFixed(2) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotal();
    console.log("Form submitted:", form);
    alert("Form submitted successfully!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1441301546/photo/laptop-on-a-desk-in-modern-office-to-work-on-a-project-virtual-business-meeting-or-online.jpg?s=612x612&w=0&k=20&c=_XTnz5NmQD-Uo7Sn7DdATu9jfrU_4TyB3MHeOzj96_I=')", backgroundSize: "cover", backgroundPosition: "center", position: "relative",}}>
        <div className="container p-3 shadow rounded text-dark"style={{ maxWidth: "600px",background: "linear-gradient(120deg, #8a91eb, #e6769b, #4fc3f7)"}}>
            <h2 className="mb-3 text-center text-white">Registration Form</h2>
            <form onSubmit={handleSubmit} className="row g-2">

                <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} className="form-control form-control-sm" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Father's Name</label>
                    <input name="fatherName" value={form.fatherName} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className="form-select form-select-sm">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Mobile No. *</label>
                    <input name="mobile" value={form.mobile} onChange={handleChange} className="form-control form-control-sm" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Emergency Phone</label>
                    <input name="emergencyPhone" value={form.emergencyPhone} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-12">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control form-control-sm" required />
                </div>

                <div className="col-12">
                    <label className="form-label">Street</label>
                    <input name="street" value={form.street} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">City</label>
                    <input name="city" value={form.city} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">State</label>
                    <input name="state" value={form.state} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Pincode</label>
                    <input name="pincode" value={form.pincode} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">College Name</label>
                    <input name="collegeName" value={form.collegeName} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Degree</label>
                    <input name="degree" value={form.degree} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Technology</label>
                    <input name="technology" value={form.technology} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Course</label>
                    <input name="course" value={form.course} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Down Payment (₹)</label>
                    <input name="downPayment" value={form.downPayment} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Registration Fees (₹)</label>
                    <input name="registrationFees" value={form.registrationFees} onChange={handleChange} className="form-control form-control-sm" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Total Fees (₹)</label>
                    <input name="totalFees" value={form.totalFees} readOnly className="form-control form-control-sm bg-light" />
                </div>

                <div className="col-12 d-flex gap-2">
                    <button type="button" onClick={calculateTotal} className="btn btn-primary btn-sm">Calculate Total</button>
                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                </div>

            </form>
        </div>
    </div>
  );
};

export default Form;