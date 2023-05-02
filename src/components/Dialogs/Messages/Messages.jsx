import React from 'react';
import css from './Messages.module.css';


const Messages = (props) => {

	let MessagesItems = props.data.map(item=> {
		let position;
		if(item.who === 'me'){
			position = {textAlign: "right"}
		}
		return (<div className={css.dialogs__message} style={position}>{item.message}</div>)
	}) 
	return (
		<div className={css.dialogs__messages}>
			{MessagesItems}
		</div>
	)
}

export default Messages;
