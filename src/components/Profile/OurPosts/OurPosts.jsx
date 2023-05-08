import React from 'react';
import css from './OurPosts.module.css';
import Posts from './Posts/Posts';


const OurPosts = (props) => {

	let newPost = React.createRef();
	let addNewPost =()=>{
		let text = newPost.current.value;
		props.addPost(text)
		newPost.current.value = "";
	}

	let changePost = ()=>{
		let text = newPost.current.value;
		props.updatePostText(text);
	}

	return (
		<div>
			<div className={`${css.item}`}>
				my posts
				<div>
					<div><textarea onChange={changePost} value={props.newPostText} ref={newPost}/></div>
					<div><button onClick={addNewPost}>Add Post</button></div>
				</div>
				
				<div className={css.posts}>
					new posts
					<Posts state={props.state} />
				</div>
			</div>
		</div>
	)
}

export default OurPosts;
