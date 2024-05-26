import React, { useEffect, useState } from "react";
import applicantService from "../services/applicantService";

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    applicantService.getAllApplicants().then((response) => {
      setApplicants(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Applicant List</h2>
      <ul>
        {applicants.map((applicant) => (
          <li key={applicant.id}>
            {applicant.firstName} {applicant.lastName} - {applicant.email} -
            Average Grade: {applicant.averageGrade} - Faculty ID:{" "}
            {applicant.facultyId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantList;
