import React, { Component } from "react";
import { connect } from "react-redux";
import { editData, updateItemValues } from "./employee-actions";
import PropTypes from "prop-types";
import DisplayComponent from "./DisplayComponent";
export class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdisplayComponent: false,
      newItem: {},
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "id": {
        this.setState({
          newItem: {
            ...this.state.newItem,
            id: value,
          },
        });

        break;
      }
      case "employee_name": {
        this.setState({
          newItem: {
            ...this.state.newItem,
            employee_name: value,
          },
        });
        break;
      }
      case "employee_salary": {
        this.setState({
          newItem: {
            ...this.state.newItem,
            employee_salary: value,
          },
        });
        break;
      }
      case "employee_age": {
        this.setState({
          newItem: {
            ...this.state.newItem,
            employee_age: value,
          },
        });
        break;
      }
    }
    this.updateToStore();
  };
  updateToStore = () => {
    const { newItem } = this.state;
    const { item } = this.props;

    this.props.updateItemValues(item.id, newItem);
  };

  handleSubmit = (item) => {
    this.props.editData(item);
    this.setState({ showdisplayComponent: true });
  };

  componentDidMount() {}
  render() {
    const { data, item } = this.props;
    const { showdisplayComponent, newItem } = this.state;
    return (
      <div>
        {!showdisplayComponent && (
          <>
            <div>
              id:
              <input
                placeholder={item.id}
                value={newItem.id}
                name="id"
                onChange={this.handleChange}
              />
            </div>
            <br />
            EmployeeName:
            <input
              placeholder={item.employee_name}
              value={newItem.employee_name}
              name="employee_name"
              onChange={this.handleChange}
            />
            Employee Salary::
            <input
              placeholder={item.employee_salary}
              value={newItem.employee_salary}
              name="employee_salary"
              onChange={this.handleChange}
            />
            Employee Age::
            <input
              placeholder={item.employee_age}
              value={newItem.employee_age}
              name="employee_age"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={() => this.handleSubmit(item)}>
              Submit
            </button>
          </>
        )}
        {showdisplayComponent && (
          <>
            <DisplayComponent data={data} />
          </>
        )}
      </div>
    );
  }
}
EditData.propTypes = {
  item: PropTypes.object,
};

export const mapStateToProps = (state) => ({
  data: state.employeeInformation.json,
});
export const mapDispatchToProps = {
  updateItemValues,
  editData,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditData);
