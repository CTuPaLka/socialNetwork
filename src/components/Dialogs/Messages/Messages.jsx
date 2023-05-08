import React from 'react';
import css from './Messages.module.css';


const Messages = (props) => {

	let newMessage = React.createRef();
	let addNewMessage = () => {
		let message = newMessage.current.value;
		alert(message);
	}

	let MessagesItems = props.state.map(item => {
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
				<div className={css.myMessage__textarea}><textarea ref={newMessage}></textarea></div>
				<div className={css.myMessage__button}><button onClick={addNewMessage}>Send</button></div>
			</div>
		</div>
	)
}

export default Messages;
