import React from 'react';
import css from './Dialogs.module.css';
import FriendsContainer from './Friends/FriendsContainer';
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {
	
	return (
		<div className={`${css.App__dialogs} ${css.dialogs}`}>
			<FriendsContainer/>

			<MessagesContainer/>
		</div>
	)
}

export default Dialogs;
