import React from 'react';
import css from './Post.module.css';


const RenderPost = (props)=>{
	// debugger
	return props.data.postsData.map(el=>{
		return(
			<div>
				<div className={css.item}>
					<img src={el.img} alt="" />
					<div>{el.content}</div>
				</div>
				<div className={css.like}>
					<span>like {el.likeQuantity}</span>
				</div>
			</div>
		)
	})
}

const Post = (props) => {
	
	return (
		<RenderPost data={props.data}/>
	)
	}


export default Post;