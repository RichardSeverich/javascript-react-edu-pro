let initialState = {};
const reducerUser = (state = initialState, action) => {
  // state is array of courseUser
  switch (action.type) {
    case "ADD":
      state.push(action.payload);
      return state;
    case "REMOVE":
      return state.filter((element, index) => element._id !== action.payload);
    default:
      return state;
  }
};
export default reducerUser;
