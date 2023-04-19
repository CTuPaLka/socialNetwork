import React from 'react';
import css from './Posts.module.css';

const Posts = (props) => {
	return (
		<div>
			<div className={`${css.item}`}>
				<img src="https://i.pinimg.com/736x/3a/e6/54/3ae6548d89419e88315d3ba31818c8ee.jpg" alt="" />
				<div>{props.postContent}</div>
			</div>
			<div className={`${css.like}`}>
				<span>like {props.likeQuantity}</span>
			</div>
		</div>
	)
}

export default Posts;
