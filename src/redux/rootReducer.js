import { combineReducers } from "redux";

import { reducer as counterReducer } from "./counter/reducer";
import { reducer as usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export { rootReducer };
