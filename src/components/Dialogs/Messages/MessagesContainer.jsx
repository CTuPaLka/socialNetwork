import React from 'react';
import { addMessageCreator, updateMessageTextCreator } from '../../../Redux/DialogsReducer';
import Messages from './Messages';
import StoreContext from '../../../StoreContext';


const MessagesContainer = (props) => {
	// let state = props.store.getState().Dialogs.messagesData;


	return <StoreContext.Consumer>
		{store => {
			let state = store.getState().Dialogs;
			let updateMessage = (e) => {
				let text = e.target.value
				store.dispatch(updateMessageTextCreator(text))
			}
			let addNewMessage = (e) => {
				let text = e.target.value
				store.dispatch(addMessageCreator(text));
			}
			return (<Messages newMessageText={state.newMessageText}
				updateMessageContainer={updateMessage}
				addNewMessageContainer={addNewMessage}
				state={state.messagesData} />)
		}}
	</StoreContext.Consumer>

}

export default MessagesContainer;
