import { FETCH_USERS, LOADING, LOG_IN, REGISTER } from "../actions/types";

export const login = (email, firebaseApp) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  firebaseApp
    .database()
    .ref()
    .child("user")
    .orderByChild("email")
    .equalTo(email)
    .on("value", (snapshot) => {
      if (snapshot.val() != null) {
        dispatch({
          type: LOG_IN,
          payload: {
            ...snapshot.val(),
          },
        });
      } else {
        dispatch({
          type: LOG_IN,
          payload: {},
        });
      }
    });
};
export const register = (userData, firebaseApp) => (dispatch) => {
  firebaseApp
    .database()
    .ref()
    .child("user")
    .push(userData, (err) => {
      if (err) console.log(err);
    });
  dispatch({
    type: REGISTER,
    payload: userData,
  });
};

export const fetchUsers = (firebaseApp) => (dispatch) => {
  firebaseApp
    .database()
    .ref()
    .child("user")
    .on("value", (snapshot) => {
      if (snapshot.val() != null) {
        console.log(snapshot.val());
        dispatch({
          type: FETCH_USERS,
          payload: {
            ...snapshot.val(),
          },
        });
      } else {
        dispatch({
          type: FETCH_USERS,
          payload: null,
        });
      }
    });
};
