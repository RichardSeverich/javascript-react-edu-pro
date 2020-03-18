let initialState = {};
const reducerUser = (state = initialState, { action = "", payload }) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: state.users.add(payload)
      };
    case "REMOVE":
      let users = state.users.filter((element, index) => {
        return element._id !== payload;
      });
      return {
        ...state,
        users: users
      };
    default:
      return state;
  }
};
export default reducerUser;
