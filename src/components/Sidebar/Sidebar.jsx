import React from 'react';
import css from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import SidebarFriends from './sidebar_friends/sidebar_friends';

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
			<SidebarFriends state={props.state.friends}/>
		</div>
		
	)
}


export default Sidebar;
