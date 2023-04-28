import React from 'react';
import css from './OurPosts.module.css';
import Posts from './Posts/Posts';


const OurPosts = (props) => {
	return (
		<div>
			<div className={`${css.item}`}>
				my posts
				<div>
					<div><textarea></textarea></div>
					<div><button>Add Post</button></div>
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
