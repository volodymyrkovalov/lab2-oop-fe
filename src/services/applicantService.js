import api from "./api";

const getAllApplicants = () => {
  return api.get("/applicants");
};

const createApplicant = (applicant) => {
  return api.post("/applicants/register", applicant);
};

export default {
  getAllApplicants,
  createApplicant,
};
