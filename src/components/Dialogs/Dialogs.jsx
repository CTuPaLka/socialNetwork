import React from 'react';
import css from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Friends from './Friends/Friends';


const Dialogs = (props) => {
	return (
		<div className={`${css.App__dialogs} ${css.dialogs}`}>
			<Friends state={props.state.friendsData}/>

			<Messages state={props.state.messagesData}/>
		</div>
	)
}

export default Dialogs;
