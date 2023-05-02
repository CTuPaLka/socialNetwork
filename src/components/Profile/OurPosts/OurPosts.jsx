import React from 'react';
import css from './OurPosts.module.css';
import Posts from './Posts/Posts';


const OurPosts = (props) => {

	let newPost = React.createRef();
	let addNewPost =()=>{
		let postContent = newPost.current.value;
		alert(postContent);
	}

	return (
		<div>
			<div className={`${css.item}`}>
				my posts
				<div>
					<div><textarea ref={newPost}></textarea></div>
					<div><button onClick={addNewPost}>Add Post</button></div>
				</div>
				<div className={css.posts}>
					new posts
					<Posts data={props.data}/>
				</div>
			</div>
		</div>
	)
}

export default OurPosts;
