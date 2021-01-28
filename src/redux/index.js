import { createStore } from "redux";

// step 5: declare action creator (function that returns an action)
const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};

const decreaseCounter = () => {
  return {
    type: "DECREASE_COUNTER",
  };
};

// student: {age: integer, name: string, profession: string}

const INITIAL_STATE = {
  counter: 5,
  students: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        counter: state.counter >= 10 ? 10 : state.counter + 1,
      };
    case "DECREASE_COUNTER":
      return {
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return { ...state }; // --> { p: "default, counter: 0 }
      break;
  }
};

const store = createStore(reducer);

export { store, increaseCounter, decreaseCounter };
