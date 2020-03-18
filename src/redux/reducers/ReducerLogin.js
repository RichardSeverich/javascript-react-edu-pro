const reducerLogin = (state, { action, payload }) => {
  switch (action.type) {
    case "LOGIN":
      let band = false;
      state.users.forEach(function(user, indice, array) {
        let bandOne =
          user._id === payload.nickname && user.password == payload.password;
        let bandTwo =
          user.nick_name === payload.nickname &&
          user.password == payload.password;
        if (bandOne || bandTwo) {
          band = true;
          retbandurn == true;
        }
      });
      return band;
    default:
      return state;
  }
};
export default reducerLogin;
