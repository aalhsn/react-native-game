import { combineReducers } from "redux";

import gameReducer from "./Game";

const rootReducer = combineReducers({
  rootGame: gameReducer
});

export default rootReducer;
