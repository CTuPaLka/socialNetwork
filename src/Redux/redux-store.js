import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import dialogsReducer from "./DialogsReducer";
import peopleReducer from "./PeopleReducer";

let reducers = combineReducers({
	Profile: profileReducer,
	Dialogs: dialogsReducer,
	Sidebar: sidebarReducer,
	People: peopleReducer,
});

let store = legacy_createStore(reducers);
window.store = store;


export default store;