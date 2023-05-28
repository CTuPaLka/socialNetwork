const follow = 'FOLLOW_USER';
const unfollow = 'UNFOLLOW_USER'
const showMore = 'SHOW_MORE_USERS';
const setUsers = 'SET_USERS'


let initializationState = {
	users: [],
}

export const peopleReducer = (state = initializationState, action) => {
	switch (action.type) {
		case follow:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u
				})
			};

		case unfollow:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u
				})
			}
				;

		case showMore:
			return state;;

		case setUsers:
			return {
				...state,
				
				users: [...action.users] 
			}

		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: follow, userId });
export const unfollowAC = (userId) => ({ type: unfollow, userId });
export const setUsersAC = (users) => ({ type: setUsers, users });
export const showMoreAC = () => ({ type: showMore });

export default peopleReducer;