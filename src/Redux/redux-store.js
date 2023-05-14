import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import dialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
	Profile: profileReducer,
	Dialogs: dialogsReducer,
	Sidebar: sidebarReducer,
});

let store = legacy_createStore(reducers);


export default store;