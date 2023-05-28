import React from "react";
import { connect } from "react-redux";
import People from "./People";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/PeopleReducer";

let mapStateToProps = (state) => {
	return {
		users: state.People.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(People)