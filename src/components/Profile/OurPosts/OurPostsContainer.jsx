import React from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../Redux/ProfileReducer';
import OurPosts from './OurPosts';
import StoreContext from '../../../StoreContext';


const OurPostsContainer = (props) => {
	// let state = props.store.getState();
	// debugger
	

	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();
				let addNewPostContainer = () => {
					store.dispatch(addPostCreator());
				}
			
				let changePostContainer = (text) => {
					store.dispatch(updatePostTextCreator(text));
				}
				return (
					<OurPosts newPostText={state.Profile.newPostText}
						addNewPostContainer={addNewPostContainer}
						changePostContainer={changePostContainer}
						state={state.Profile.postsData} />
				)
			}}
		</StoreContext.Consumer>
	)

}

export default OurPostsContainer;
