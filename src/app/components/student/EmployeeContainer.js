import React, { Component } from "react";
import { connect } from "react-redux";
import { renderSteps } from "./employee-actions";
import { Table } from "reactstrap";
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
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
