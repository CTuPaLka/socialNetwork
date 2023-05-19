import React from 'react';
import Friends from './Friends';
import StoreContext from '../../../StoreContext';



const FriendsContainer = (props) => {
	// let state = props.store.getState().Dialogs.friendsData;
	return <StoreContext.Consumer>
		{store => {
			let state = store.getState().Dialogs.friendsData;
		return <Friends state={state} />
		}}
	</StoreContext.Consumer>

}

export default FriendsContainer;
