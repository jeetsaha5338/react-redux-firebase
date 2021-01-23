import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/userAction";
import LoginForm from "./LoginForm";

/**
 * @author
 * @class Login
 **/

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  handleLogin = (email, password) => {
    this.props.login(email, this.props.firebaseApp);
    this.setState({ password: password });
  };
  componentDidUpdate() {
    const { user, loading } = this.props;
    if (user && !loading) {
      if (user.password === this.state.password) {
        this.props.handlePage(2);
      } else {
        alert("Wrong username/password");
      }
    }
  }
  render() {
    return <LoginForm {...this.props} handleLogin={this.handleLogin} />;
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  user: state.user.user,
  loading: state.user.loading,
});
export default connect(mapStateToProps, { login })(Login);
