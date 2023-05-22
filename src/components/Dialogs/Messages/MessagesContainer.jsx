// import React from 'react';
import { addMessageCreator, updateMessageTextCreator } from '../../../Redux/DialogsReducer';
import Messages from './Messages';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


// const MessagesContainer = (props) => {
// 	// let state = props.store.getState().Dialogs.messagesData;


// 	return <StoreContext.Consumer>
// 		{store => {
// 			let state = store.getState().Dialogs;
// 			let updateMessage = (e) => {
// 				let text = e.target.value
// 				store.dispatch(updateMessageTextCreator(text))
// 			}
// 			let addNewMessage = (e) => {
// 				let text = e.target.value
// 				store.dispatch(addMessageCreator(text));
// 			}
// 			return (<Messages newMessageText={state.newMessageText}
// 				updateMessageContainer={updateMessage}
// 				addNewMessageContainer={addNewMessage}
// 				state={state.messagesData} />)
// 		}}
// 	</StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
	return {
		newMessageText: state.Dialogs.newMessageText,
		state: state.Dialogs.messagesData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateMessageContainer: (e) => {
			let text = e.target.value
			dispatch(updateMessageTextCreator(text))
		},
		addNewMessageContainer: (e) => {
			let text = e.target.value
			dispatch(addMessageCreator(text));
		}
	}
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;
