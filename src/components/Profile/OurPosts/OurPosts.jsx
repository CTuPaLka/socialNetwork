import React from 'react';
import css from './OurPosts.module.css';
import Posts from './Posts/Posts';


const OurPosts = (props) => {
	// создали ссылку на textarea, чтобы взаимодействовать с ним. QuerySelector, getElementById и т.д. в react  не работает
	let newPost = React.createRef();
	/**
	 * функция публикации нового поста
	 * 1) создали переменную, принимающую текущее значение textarea с помощью ...current.value
	 * 2) вызываем addPost передав переменную text
	 */
	let addNewPost =()=>{
		props.dispatch({ type: "ADD-POST"});
	}

	/**
	 * функция изменения поста
	 * 1) создаем локальную переменую, которая принимает значением текущее значение textarea
	 * 2) вызываем updatePostText передав переменную text в качестве параметра
	 */
	let changePost = ()=>{
		let text = newPost.current.value;
		props.dispatch({ type: "UPDATE-POST-TEXT", newText: text});
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
