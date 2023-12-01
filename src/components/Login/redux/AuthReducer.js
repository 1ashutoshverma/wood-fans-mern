const intialState = JSON.parse(localStorage.getItem("userDetails")) || {
  name: "",
  token: "",
  isAuth: false,
};

const AuthReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "login": {
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          isAuth: true,
          name: payload.name,
          token: payload.token,
        })
      );

      return {
        ...state,
        isAuth: true,
        name: payload.name,
        token: payload.token,
      };
    }

    case "logout": {
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          isAuth: false,
          name: "",
          token: "",
        })
      );

      return {
        ...state,
        isAuth: false,
        name: "",
        token: "",
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
