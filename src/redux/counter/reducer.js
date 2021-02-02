// student: {age: integer, name: string, profession: string}
import { data } from "./types";

const INITIAL_STATE = {
  counter: 5,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case data.counter.INCREASE_COUNTER:
      return {
        counter: state.counter >= 10 ? 10 : state.counter + 1,
      };
    case data.counter.DECREASE_COUNTER:
      return {
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return { ...state }; // --> { p: "default, counter: 0 }
  }
};

export { reducer };
