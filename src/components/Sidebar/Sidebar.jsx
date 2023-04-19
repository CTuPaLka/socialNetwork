import React from 'react';
import css from './Sidebar.module.css';


const Sidebar = ()=>{
	return(
		<nav className={`${css.App__sidebar} ${css.sidebar}`}>
				<ul>
					<li className={`${css.item}`}>Profile</li>
					<li className={`${css.item}`}>Messages</li>
					<li className={`${css.item}`}>News</li>
					<li className={`${css.item}`}>Music</li>
					<li className={`${css.item}`}>Settings</li>
				</ul>
			</nav>
	)
}

export default Sidebar;
