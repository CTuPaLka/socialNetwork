import React from 'react';
import css from './OurPosts.module.css';
import Posts from './Posts/Posts';

const Post = (props) => <Posts className={css.posts__item} postContent={props.content} likeQuantity={props.likeQuantity} />
let PostsData = [
	{ content: 'you are so cool))', likeQuantity: 12 },
	{ content: 'I agree with a man higher', likeQuantity: 32 },
	{ content: 'I want to be your friend', likeQuantity: 543 },
	{ content: 'fourth post', likeQuantity: 1 }
]

let PostItems = PostsData
	.map(item => <Post content={item.content} likeQuantity={item.likeQuantity} />)

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
				{PostItems}
				</div>
			</div>
		</div>
	)
}

export default OurPosts;
