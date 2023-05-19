import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import OurPostsContainer from './OurPosts/OurPostsContainer';

const Profile = (props) => {
	// debugger
	return (
		<div className={`${css.App__profile} ${css.profile}`}>
			<ProfileInfo />
			<OurPostsContainer store={props.store}/>
		</div>
	)
}

export default Profile;
