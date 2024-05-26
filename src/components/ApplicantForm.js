import React, { useState, useEffect } from "react";
import applicantService from "../services/applicantService";
import facultyService from "../services/facultyService";

const ApplicantForm = () => {
  const [applicant, setApplicant] = useState({
    firstName: "",
    lastName: "",
    email: "",
    averageGrade: "",
    facultyId: "",
  });

  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    facultyService.getAllFaculties().then((response) => {
      setFaculties(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({ ...applicant, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applicantService.createApplicant(applicant).then((response) => {
      console.log("Applicant created:", response.data);
      // Optionally, redirect or update the list
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Applicant</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={applicant.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={applicant.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={applicant.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Average Grade:</label>
        <input
          type="number"
          step="0.01"
          name="averageGrade"
          value={applicant.averageGrade}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Faculty:</label>
        <select
          name="facultyId"
          value={applicant.facultyId}
          onChange={handleChange}
          required
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default ApplicantForm;
