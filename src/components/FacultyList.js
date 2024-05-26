import React, { useEffect, useState } from "react";
import facultyService from "../services/facultyService";

const FacultyList = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    facultyService.getAllFaculties().then((response) => {
      setFaculties(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Faculty List</h2>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty.id}>
            {faculty.name} - Admission Plan: {faculty.admissionPlan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
