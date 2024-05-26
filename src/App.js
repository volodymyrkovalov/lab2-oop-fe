import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ApplicantList from "./components/ApplicantList";
import ApplicantForm from "./components/ApplicantForm";
import FacultyList from "./components/FacultyList";
import FacultyForm from "./components/FacultyForm";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/applicants">View Applicants</Link>
            </li>
            <li>
              <Link to="/register-applicant">Register Applicant</Link>
            </li>
            <li>
              <Link to="/faculties">View Faculties</Link>
            </li>
            <li>
              <Link to="/register-faculty">Register Faculty</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/applicants" component={ApplicantList} />
          <Route path="/register-applicant" component={ApplicantForm} />
          <Route path="/faculties" component={FacultyList} />
          <Route path="/register-faculty" component={FacultyForm} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Welcome to the Admission System</h2>
    <ul>
      <li>
        <Link to="/applicants">View Applicants</Link>
      </li>
      <li>
        <Link to="/register-applicant">Register Applicant</Link>
      </li>
      <li>
        <Link to="/faculties">View Faculties</Link>
      </li>
      <li>
        <Link to="/register-faculty">Register Faculty</Link>
      </li>
    </ul>
  </div>
);

export default App;
