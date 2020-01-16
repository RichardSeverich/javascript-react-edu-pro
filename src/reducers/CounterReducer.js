  
import {INCREMENT, DECREMENT, RESET} from '../actions/index'

const INITIAL_STATE = {
  count: 0,
  history: [],
}

function handleChange(state, change) {
  const {count, history} = state;
  return ({
    count: count + change,
    history: [count + change, ...history]
  })
}

export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
}