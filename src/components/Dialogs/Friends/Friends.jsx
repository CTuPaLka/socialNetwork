import React from 'react';
import css from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const setActive = () => { return ({ isActive }) => isActive ? css.dialogs__active + ' ' + css.dialogs__name : css.dialogs__name }

const Friends = (props) => {
	let FriendsItems = props.data.map(item=> {
		const path = "/messages/"+ item.id;
		return(
		<div className={css.dialogs__item}>
			<img src={item.imgUrl} alt="" />
			<NavLink className={setActive()} to={path}>{item.name}</NavLink>
		</div>
	)})
	return (
			<div className={`${css.dialogs__names}`}>
				{FriendsItems}
			</div>
	)
}

export default Friends;
