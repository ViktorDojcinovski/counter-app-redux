import { createStore } from "redux";

// const increaseCounter = () => ({
//   type: "INCREASE_COUNTER",
// });

const INITIAL_STATE = {
  p: "default",
  counter: 25,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state }; // --> { p: "default, counter: 0 }
      break;
  }
};

const store = createStore(reducer);

export { store };
