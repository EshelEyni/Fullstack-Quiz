import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/auth.reducer";
import { systemReducer } from "./reducers/system.reducer";
import { quizReducer } from "./reducers/quiz.reducer";

const rootReducer = combineReducers({
  authModule: authReducer,
  systemModule: systemReducer,
  quizModule: quizReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
