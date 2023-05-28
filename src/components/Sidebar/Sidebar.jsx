import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import SidebarFriendsContainer from './sidebar_friends/sidebar_friendsConstructor';

const setActive = (props) => { return ({ isActive }) => isActive ? css.active + ' ' + css.item : css.item }

const Sidebar = (props) => {
	return (
		<div className={css.App__sidebar}>
			<nav className={css.sidebar__links}>
				<NavLink className={setActive()} to="/profile">Profile</NavLink>
				<NavLink className={setActive()} to="/messages">Messages</NavLink>
				<NavLink className={setActive()} to="/news">News</NavLink>
				<NavLink className={setActive()} to="/music">Music</NavLink>
				<NavLink className={setActive()} to="/settings">Settings</NavLink>
			</nav>
			<SidebarFriendsContainer />
		</div>

	)
}


export default Sidebar;
