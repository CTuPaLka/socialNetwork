import React from 'react';
import css from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Friends from './Friends/Friends';


const Dialogs = (props) => {
	return (
		<div className={`${css.App__dialogs} ${css.dialogs}`}>
			<Friends/>

			<Messages/>
		</div>
	)
}

export default Dialogs;
