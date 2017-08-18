import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";    //异步
import promise from  "redux-promise-middleware";//异步-promise

import reducers from "../reducers/";

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducers, middleware);
