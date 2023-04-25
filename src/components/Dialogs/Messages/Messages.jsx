import React from 'react';
import css from './Messages.module.css';

const messagesData = [
	{message: "hello"},
	{message: "What qre you doing tomorrow?"},
	{message: "We gonna play basketball"}
]

const MessagesItems = messagesData.map(item=> {return (<div className={css.dialogs__message}>{item.message}</div>)}) 


const Messages = (props) => {
	return (
		<div className={css.dialogs__messages}>
			{MessagesItems}
		</div>
	)
}

export default Messages;
