import React from 'react';
import css from './Messages.module.css';
import { addMessageCreator, updateMessageTextCreator } from '../../../Redux/DialogsReducer';


const Messages = (props) => {

	let updateMessage = (e) => {
		let text = e.target.value
		props.dispatch(updateMessageTextCreator(text))
	}
	let addNewMessage = (e) => {
		let text = e.target.value
		props.dispatch(addMessageCreator(text));
	}

	let MessagesItems = props.state.messagesData.map(item => {
		let position;
		if (item.who === 'me') {
			position = { textAlign: "right" }
		}
		return (<div className={css.dialogs__message} style={position}>{item.message}</div>)
	})
	return (
		<div className={css.dialogs__messages}>
			{MessagesItems}
			<div className={css.message__myMessage}>
				<div className={css.myMessage__textarea}><textarea value={props.state.newMessageText} onChange={updateMessage} /></div>
				<div className={css.myMessage__button}><button onClick={addNewMessage}>Send</button></div>
			</div>
		</div>
	)
}

export default Messages;
