import React from 'react';
import css from './Messages.module.css';


const Messages = (props) => {
	let MessagesItems = props.data.map(item=> {return (<div className={css.dialogs__message}>{item.message}</div>)}) 
	return (
		<div className={css.dialogs__messages}>
			{MessagesItems}
		</div>
	)
}

export default Messages;
