import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={`${css.content__photo}`}><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" /></div>
			<div className={`${css.ava}`}>ava + description</div>
		</div>
	)
}

export default ProfileInfo;
