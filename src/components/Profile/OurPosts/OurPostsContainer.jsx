// import React from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../Redux/ProfileReducer';
import OurPosts from './OurPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


// const OurPostsContainer = (props) => {
// 	// let state = props.store.getState();
// 	// debugger
	

// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState();
// 				let addNewPostContainer = () => {
// 					store.dispatch(addPostCreator());
// 				}
			
// 				let changePostContainer = (text) => {
// 					store.dispatch(updatePostTextCreator(text));
// 				}
// 				return (
// 					<OurPosts newPostText={state.Profile.newPostText}
// 						addNewPostContainer={addNewPostContainer}
// 						changePostContainer={changePostContainer}
// 						state={state.Profile.postsData} />
// 				)
// 			}}
// 		</StoreContext.Consumer>
// 	)

// }

let mapStateToProps = (state)=>{
	return {
		state: state.Profile.postsData,
		newPostText: state.Profile.newPostText
	}
}

let mapDispatchToProps = (dispatch)=>{
return {
	addNewPostContainer: () => {
		dispatch(addPostCreator());
	},
	changePostContainer: (text) => {
		dispatch(updatePostTextCreator(text));
	}
}}

let OurPostsContainer= connect(mapStateToProps, mapDispatchToProps)(OurPosts)

export default OurPostsContainer;
