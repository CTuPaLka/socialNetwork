import React from 'react';
import Post from './Post/Post';



const Posts = (props) => {
	return (
		<Post state={props.state} addPost={props.addPost}/>
	)
}

export default Posts;
