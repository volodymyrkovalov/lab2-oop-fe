import api from "./api";

const getAllFaculties = () => {
  return api.get("/faculties");
};

const createFaculty = (faculty) => {
  return api.post("/faculties", faculty);
};

export default {
  getAllFaculties,
  createFaculty,
};
