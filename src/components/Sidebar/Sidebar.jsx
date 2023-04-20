import React from 'react';
import css from './Sidebar.module.css';


const Sidebar = ()=>{
	return(
		<nav className={`${css.App__sidebar} ${css.sidebar}`}>
				<ul>
					<li className={`${css.item}`}><a href="/profile">Profile</a></li>
					<li className={`${css.item}`}><a href="/messages">Messages</a></li>
					<li className={`${css.item}`}><a href="/news">News</a></li>
					<li className={`${css.item}`}><a href="/music">Music</a></li>
					<li className={`${css.item}`}><a href="/settings">Settings</a></li>
				</ul>
			</nav>
	)
}

export default Sidebar;
