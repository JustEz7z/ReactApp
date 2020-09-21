import { createStore, combineReducers , applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store