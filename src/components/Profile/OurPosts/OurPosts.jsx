import React from 'react';
import css from './OurPosts.module.css';
import Post from './Posts/Post/Post';


const OurPosts = (props) => {
	// создали ссылку на textarea, чтобы взаимодействовать с ним. QuerySelector, getElementById и т.д. в react  не работает
	// let newPost = React.createRef();
	/**
	 * функция публикации нового поста
	 * 1) создали переменную, принимающую текущее значение textarea с помощью ...current.value
	 * 2) вызываем addPost передав переменную text
	 */
	let addNewPost = () => {
		props.addNewPostContainer();
	}

	/**
	 * функция изменения поста
	 * 1) создаем локальную переменую, которая принимает значением текущее значение textarea
	 * 2) вызываем updatePostText передав переменную text в качестве параметра
	 */
	let changePost = (e) => {
		let text = e.target.value;
		props.changePostContainer(text)
	}

	return (
		<div>
			<div className={`${css.item}`}>
				my posts
				<div>
					<div><textarea onChange={changePost} value={props.newPostText} /></div>
					<div><button onClick={addNewPost}>Add Post</button></div>
				</div>

				<div className={css.posts}>
					new posts
					<Post state={props.state} addPost={props.addPost} />
				</div>
			</div>
		</div>
	)
}

export default OurPosts;
