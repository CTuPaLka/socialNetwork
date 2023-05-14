import React from 'react';
import css from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Friends from './Friends/Friends';


const Dialogs = (props) => {
	
	return (
		<div className={`${css.App__dialogs} ${css.dialogs}`}>
			<Friends state={props.state.friendsData}/>

			<Messages dispatch={props.dispatch} state={props.state}/>
		</div>
	)
}

export default Dialogs;
