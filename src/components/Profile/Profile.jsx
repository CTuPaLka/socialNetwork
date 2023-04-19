import React from 'react';
import css from './Profile.module.css';
import OurPosts from './OurPosts/OurPosts';

const Profile = () => {
	return (
		<div className={`${css.App__profile} ${css.profile}`}>
			<div className={`${css.content__photo}`}><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" /></div>
			<div className={`${css.ava}`}>ava + description</div>
			<OurPosts />
		</div>
	)
}

export default Profile;
