import { legacy_createStore , combineReducers , compose , applyMiddleware } from "redux"
import thunk from "redux-thunk";
import imagesReducer from "./images/reducer";

const rootReducer = combineReducers({
    image : imagesReducer
})
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer , createComposer(applyMiddleware(thunk)));
