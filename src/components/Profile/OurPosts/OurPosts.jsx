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
				<div className={`${css.posts}`}>
					new posts
					<Posts postContent='you are so cool))' likeQuantity='170'/>
					<Posts postContent='I agree with a man higher' likeQuantity='35'/>
				</div>
			</div>
		</div>
	)
}

export default OurPosts;
