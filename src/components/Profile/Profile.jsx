import React from 'react';
import css from './Profile.module.css';
import OurPosts from './OurPosts/OurPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div className={`${css.App__profile} ${css.profile}`}>
			<ProfileInfo/>
			<OurPosts state={props.state} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
		</div>
	)
}

export default Profile;
