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
      firstid: 0,
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "id": {
        this.setState({
          id: value,
        });
        break;
      }
      case "employee_name": {
        this.setState({ employee_name: value });
        break;
      }
    }
    this.updateToStore();
  };
  updateToStore = () => {
    const { id, employee_name } = this.state;
    const { item } = this.props;

    console.log(">>>>>updatedid>>>>>>employee_name>>>", id, employee_name);
    this.props.updateItemValues(item.id, id, employee_name);
  };

  handleSubmit = (item) => {
    console.log(">>>>>handleSubmit>>>");
    this.props.editData(item);
    this.setState({ showdisplayComponent: true });
  };
  componentDidMount() {}
  render() {
    const { data, item } = this.props;
    const { showdisplayComponent } = this.state;
    return (
      <div>
        {!showdisplayComponent && (
          <>
            <div>
              id:
              <input
                placeholder={item.id}
                value={this.state.id}
                name="id"
                onChange={this.handleChange}
              />
            </div>
            <br />
            employeeName:
            <input
              placeholder={item.employee_name}
              value={this.state.employee_name}
              name="employee_name"
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
