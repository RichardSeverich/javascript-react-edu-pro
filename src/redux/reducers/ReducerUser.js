let initialState = {};
const reducerUser = (state = initialState, action) => {
  // state is array of users
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: state.users.add(action.payload)
      };
    case "REMOVE":
      /* let users = state.filter((element, index) => {
        return element._id !== action.payload;
      });
      console.log(users);
      return users;*/

      return state.filter((element, index) => element._id !== action.payload);

    /*return {
        //...state,
        state: state.filter((element, index) => element._id !== action.payload)
      };*/
    default:
      return state;
  }
};
export default reducerUser;
