import React, { useState } from "react";
import facultyService from "../services/facultyService";

const FacultyForm = () => {
  const [faculty, setFaculty] = useState({
    name: "",
    admissionPlan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty({ ...faculty, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    facultyService.createFaculty(faculty).then((response) => {
      console.log("Faculty created:", response.data);
      // Optionally, redirect or update the list
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Faculty</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={faculty.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Admission Plan:</label>
        <input
          type="number"
          name="admissionPlan"
          value={faculty.admissionPlan}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default FacultyForm;
