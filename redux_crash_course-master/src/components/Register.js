import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../actions/userAction";
import RegisterForm from "./RegisterForm";

/**
 * @author
 * @class Register
 **/

class Register extends Component {
  constructor(props) {
    super(props);
  }

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.login(this.state.userName);
  //   };

  handleRegister = (obj) => {
    this.props.register(obj, this.props.firebaseApp);
  };

  render() {
    return (
      <RegisterForm {...this.props} handleRegister={this.handleRegister} />
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};
export default connect(null, { register })(Register);
