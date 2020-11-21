import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
export class DisplayComponent extends Component {
  render() {
    const { data, handleEditClick, hanldeDelete } = this.props;

    return (
      <>
        <h1 style={{ marginLeft: "800px" }}>Employee Management System</h1>
        <br />
        <Table style={{ marginLeft: "700px", width: "100px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>EmployeeName</th>
              <th>EmployeeSalary</th>
              <th>EmployeeAge</th>
              <th>EDIT</th>
              <th>Delete</th>
            </tr>
          </thead>
          {data !== undefined && (
            <tbody>
              {data.map((input) => (
                <tr>
                  <td>{input.id}</td>
                  <td>{input.employee_name}</td>
                  <td>{input.employee_salary}</td>
                  <td>{input.employee_age}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      onClick={() => handleEditClick(input)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button type="button" onClick={() => hanldeDelete(input)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </>
    );
  }
}

DisplayComponent.propTypes = {
  data: PropTypes.array,
  handleEditClick: PropTypes.func,
  hanldeDelete: PropTypes.func,
};
export default DisplayComponent;
