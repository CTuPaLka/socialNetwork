// import React from 'react';
import Friends from './Friends';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';



// const FriendsContainer = (props) => {
// 	// let state = props.store.getState().Dialogs.friendsData;
// 	return <StoreContext.Consumer>
// 		{store => {
// 			let state = store.getState().Dialogs.friendsData;
// 		return <Friends state={state} />
// 		}}
// 	</StoreContext.Consumer>

// }

let mapStateToProps = (state) => {
	return {
		state: state.Dialogs.friendsData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
