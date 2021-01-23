import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/userAction";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";

/**
 * @author
 * @class Login
 **/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 350,
    borderRadius: 12,
    borderColor: "blue",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  form: {
    marginTop: 100,
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   () => props.handlePage(2)
  const handleClickLogin = () => {
    if (userName === "") {
      alert("User Name *required");
    } else if (password === "") {
      alert("password *required");
    } else {
      props.handleLogin(userName, password);
    }
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1} className={classes.form}>
          <Paper className={classes.paper}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <h2 style={{ textAlign: "center" }}>Login</h2>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  style={{ width: "345px" }}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  style={{ width: "345px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={8} style={{ paddingLeft: "20px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={props.signInWithGoogle}
                >
                  Signin With Google
                </Button>
              </Grid>
              <Grid item xs={4} style={{ paddingLeft: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickLogin}
                >
                  {props.loading ? (
                    <CircularProgress color="inherit" size="22px" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={8}>
                <h4 style={{ textAlign: "center" }}>
                  New member?{" "}
                  <b
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => props.handlePage(1)}
                  >
                    Register
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

export default LoginForm;
