import React, { Component } from "react";
import { connect } from "react-redux";
import { renderSteps, deleteData } from "./employee-actions";

import EditData from "./EditData";
import { DisplayComponent } from "./DisplayComponent";
export class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      item: {},
    };
  }
  componentDidMount() {
    this.props.renderSteps();
  }
  handleEditClick = (anlItem) => {
    this.setState({
      showTable: true,
    });
    this.setState({ item: anlItem });
  };
  hanldeDelete = (item) => {
    this.setState({
      showTable: false,
    });
    this.props.deleteData(item.id);
  };
  render() {
    const { data } = this.props;

    return (
      <div>
        {this.state.showTable && <EditData item={this.state.item} />}
        {!this.state.showTable && (
          <>
            <DisplayComponent
              data={data}
              handleEditClick={this.handleEditClick}
              hanldeDelete={this.hanldeDelete}
            />
          </>
        )}
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  data: state.employeeInformation.json,
});
export const mapDispatchToProps = {
  renderSteps,
  deleteData,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
