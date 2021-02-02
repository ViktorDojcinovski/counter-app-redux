// student: {age: integer, name: string, profession: string}
import { data } from "./types";

const INITIAL_STATE = {
  usersList: [
    {
      id: "1",
      name: "John",
      age: 20,
      position: "developer",
    },
    {
      id: "2",
      name: "Mary",
      age: 25,
      position: "finance",
    },
    {
      id: "3",
      name: "Tom",
      age: 30,
      position: "HR",
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state }; // --> { p: "default, counter: 0 }
  }
};

export { reducer };
