import React from 'react';
import css from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ()=>{return ({isActive}) => isActive ? css.active+' '+css.item : css.item} 

const Sidebar = ()=>{
	return(
		<nav className={`${css.App__sidebar}`}>
					<NavLink className={setActive()} to="/profile">Profile</NavLink>
					<NavLink className={setActive()} to="/messages">Messages</NavLink>
					<NavLink className={setActive()} to="/news">News</NavLink>
					<NavLink className={setActive()} to="/music">Music</NavLink>
					<NavLink className={setActive()} to="/settings">Settings</NavLink>
				</nav>
	)
}


export default Sidebar;
