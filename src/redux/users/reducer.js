// student: {age: integer, name: string, profession: string}
import { data } from "./types";

const INITIAL_STATE = {
  usersList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state }; // --> { p: "default, counter: 0 }
  }
};

export { reducer };
