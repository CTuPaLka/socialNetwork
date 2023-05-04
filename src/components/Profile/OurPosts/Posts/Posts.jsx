import React from 'react';
import Post from './Post/Post';



const Posts = (props) => {
	console.log(props.data)
	return (
		<Post data={props.data} addPost={props.addPost}/>
	)
}

export default Posts;
