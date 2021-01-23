import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * @author
 * @class Dashboard
 **/

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userDetails, user } = this.props;
    const fullName = user
      ? user.displayName
      : userDetails.firstName +
        " " +
        (userDetails.middleName === "" ? "" : userDetails.middleName + " ") +
        userDetails.lastName;
    return (
      <h4
        style={{
          fontSize: "24px",
          color: "white",
          textAlign: "center",
          backgroundColor: "blue",
        }}
      >
        Hi, {fullName}
      </h4>
    );
  }
}

Dashboard.propTypes = {
  userDetails: PropTypes.object,
};
const mapStateToProps = (state) => ({
  userDetails: state.user.user,
});
export default connect(mapStateToProps, null)(Dashboard);
