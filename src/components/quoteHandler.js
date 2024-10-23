import React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Pages/quote.css";
import "../layout/landingPage.css";

function QuoteHandler() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    request: "",
  });

  const [minDate, setMinDate] = useState("");
  //These three variables need to be changed to client information before launch

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_fol8n8k";
    const templateID = "template_wuvtnak";
    const PublicKey = "62gV_oghdNKKdlXsx";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Subai",
      date: formData.date,
      request: formData.request,
    };

    emailjs
      .send(serviceID, templateID, templateParams, PublicKey)
      .then((response) => {
        console.log("email sent", response);
        setFormData.name("");
        setFormData.email("");
        setFormData.date("");
        setFormData.request("");
      })
      .catch((error) => {
        console.error("error sending email", error);
      });
  };

  // Function to calculate the minimum date
  const calculateMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3); // Add 3 days
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    setMinDate(calculateMinDate());
  }, []);

  return (
    <div className="form-container">
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          min={minDate}
          onChange={handleChange}
          required
        />
        <textarea
          cols="30"
          rows="12"
          name="request"
          value={formData.request}
          onChange={handleChange}
          placeholder="Request"
          required
        />
        <button type="submit">Submit Quote</button>
      </form>
    </div>
  );
}

export default QuoteHandler;
