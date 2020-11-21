import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeContainer from "./components/student/EmployeeContainer";
// import Layout from "./components/student/layout";
import "./App.css";
export const App = () => {
  return (
    <div>
      <EmployeeContainer />
      {/* <Layout /> */}
    </div>
  );
};

export default App;
