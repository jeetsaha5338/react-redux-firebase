import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./components/Layout";

import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  componentDidMount() {
    this.props.signOut();
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout {...this.props} firebaseApp={firebaseApp} />
        </div>
      </Provider>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
