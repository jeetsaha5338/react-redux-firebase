import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/userAction";
import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
// import Image from "../../public/Let’s Party Gras-1.jpg";

/**
 * @author
 * @class Login
 **/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundImage: `url(${Image})`,
  },
  paper: {
    height: 480,
    width: 350,
    borderRadius: 12,
    borderColor: "blue",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  form: {
    marginTop: 60,
  },
  nameField: {
    width: "300px",
    marginLeft: "25px",
  },
  btn: {
    width: "75px",
    marginLeft: "3px",
    fontSize: "12px",
  },
  btnActive: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 12,
    textAlign: "center",
    padding: "5px",
    fontSize: "12px",
    height: "25px",
  },
  barActive: {
    height: "2px",
    backgroundColor: "blue",
    marginTop: "11px",
  },
  btnInactive: {
    backgroundColor: "grey",
    color: "white",
    borderRadius: 12,
    textAlign: "center",
    padding: "5px",
    fontSize: "12px",
    height: "25px",
  },
  barInactive: {
    height: "2px",
    backgroundColor: "grey",
    marginTop: "11px",
  },
}));

const RegisterForm = (props) => {
  const classes = useStyles();
  const nameRegex = /^[a-zA-Z]+$/;
  const numberRegex = /^[0-9]{10}$/;
  const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const stateRegex = /^[a-zA-Z ]+$/;
  const pinRegex = /^[0-9]{6}$/;
  const [stage, setStage] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const inputValidation = (name, regex) => {
    if (name === "") {
      return false;
    } else {
      return !regex.test(name);
    }
  };
  const handleClickRegister = () => {
    if (stage === 0) {
      if (firstName === "" || !nameRegex.test(firstName)) {
        alert("First name *require/invalid");
      } else if (!nameRegex.test(middleName) && middleName !== "") {
        alert("Middle name invalid");
      } else if (lastName === "" || !nameRegex.test(lastName)) {
        alert("Last name *require/invalid");
      } else {
        setStage(1);
      }
    } else if (stage === 1) {
      if (email === "" || !emailRegex.test(email)) {
        alert("Email *require/invalid");
      } else if (phone === "" || !numberRegex.test(phone)) {
        alert("Phone number *require/invalid");
      } else if (password === "" || !passwordRegex.test(password)) {
        alert("Password *require/invalid");
      } else {
        setStage(2);
      }
    } else {
      if (state === "" || !stateRegex.test(state)) {
        alert("state name *require/invalid");
      } else if (city === "" || !nameRegex.test(city)) {
        alert("City name *require/invalid");
      } else if (pincode === "" || !pinRegex.test(pincode)) {
        alert("Pincode *require/invalid");
      } else {
        let obj = {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          phone: phone,
          password: password,
          address: {
            state: state,
            city: city,
            pincode: pincode,
          },
        };
        // props.firebaseApp
        //   .database()
        //   .ref()
        //   .child("user")
        //   .push(obj, (err) => {
        //     if (err) console.log(err);
        //   });
        props.handleRegister(obj);
        props.handlePage(0);
      }
    }
  };
  const handleClickReset = () => {
    if (stage === 0) {
      setFirstName("");
      setMiddleName("");
      setLastName("");
    } else if (stage === 1) {
      setEmail("");
      setPhone("");
      setPassword("");
      setStage(0);
    } else {
      setState("");
      setCity("");
      setPincode("");
      setStage(1);
    }
  };
  const formList = {
    stage1: (
      <Fragment>
        <Grid item xs={12}>
          <TextField
            label="First Name"
            className={classes.nameField}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            helperText={
              inputValidation(firstName, nameRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(firstName, nameRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Middle Name"
            className={classes.nameField}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            helperText={
              inputValidation(middleName, nameRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(middleName, nameRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            className={classes.nameField}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            helperText={
              inputValidation(lastName, nameRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(lastName, nameRegex)}
          />
        </Grid>
      </Fragment>
    ),
    stage2: (
      <Fragment>
        <Grid item xs={12}>
          <TextField
            label="Email"
            className={classes.nameField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              inputValidation(email, emailRegex) ? "Incorrect Email" : ""
            }
            error={inputValidation(email, emailRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            className={classes.nameField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            helperText={
              inputValidation(phone, numberRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(phone, numberRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            className={classes.nameField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={
              inputValidation(password, passwordRegex)
                ? "Minimum 6 digit, No Special Charecter"
                : ""
            }
            error={inputValidation(password, passwordRegex)}
          />
        </Grid>
      </Fragment>
    ),
    stage3: (
      <Fragment>
        <Grid item xs={12}>
          <TextField
            label="State"
            className={classes.nameField}
            value={state}
            onChange={(e) => setState(e.target.value)}
            helperText={
              inputValidation(state, stateRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(state, stateRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="City"
            className={classes.nameField}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            helperText={
              inputValidation(city, nameRegex) ? "Incorrect entry" : ""
            }
            error={inputValidation(city, nameRegex)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Pin code"
            className={classes.nameField}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            helperText={
              inputValidation(pincode, pinRegex) ? "6 Digit *require" : ""
            }
            error={inputValidation(pincode, pinRegex)}
          />
        </Grid>
      </Fragment>
    ),
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2} className={classes.form}>
          <Paper className={classes.paper}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <h2 style={{ textAlign: "center" }}>Register</h2>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={3} className={classes.btnActive}>
                    Personal Info
                  </Grid>
                  <Grid item xs={1}>
                    <div
                      className={
                        stage > 0 ? classes.barActive : classes.barInactive
                      }
                    ></div>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    className={
                      stage > 0 ? classes.btnActive : classes.btnInactive
                    }
                  >
                    Contact Info
                  </Grid>
                  <Grid item xs={1}>
                    <div
                      className={
                        stage > 1 ? classes.barActive : classes.barInactive
                      }
                    ></div>
                  </Grid>

                  <Grid
                    item
                    xs={3}
                    className={
                      stage > 1 ? classes.btnActive : classes.btnInactive
                    }
                  >
                    Address
                  </Grid>
                </Grid>
                {/* </div> */}
              </Grid>
              {stage === 0
                ? formList.stage1
                : stage === 1
                ? formList.stage2
                : formList.stage3}

              {/* Button */}
              <Grid item xs={3} />
              <Grid item xs={3}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={handleClickReset}
                >
                  {stage > 0 ? "Back" : "Cancel"}
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  onClick={handleClickRegister}
                >
                  {stage < 2 ? "Save" : "Register"}
                </Button>
              </Grid>
              <Grid item xs={3} />
              {/* text */}
              <Grid item xs={2} />
              <Grid item xs={8}>
                <h4 style={{ textAlign: "center" }}>
                  Already a member?{" "}
                  <b
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => props.handlePage(0)}
                  >
                    Log in
                  </b>
                </h4>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
