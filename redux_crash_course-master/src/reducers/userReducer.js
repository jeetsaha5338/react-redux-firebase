import { FETCH_USERS, LOG_IN, REGISTER, LOADING } from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  userList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOG_IN:
      let obj = {};
      const user = action.payload;
      Object.keys(user).forEach((key) => {
        obj = {
          firstName: user[key].firstName,
          middleName: user[key].middleName,
          lastName: user[key].lastName,
          email: user[key].email,
          phone: user[key].phone,
          password: user[key].password,
          address: user[key].address,
        };
      });
      return {
        ...state,
        user: obj,
        loading: false,
      };
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };

    case FETCH_USERS:
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
