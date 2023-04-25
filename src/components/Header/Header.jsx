import React from 'react';
import css from './Header.module.css';

const Header = (props)=>{
	return(
		<div className={`${css.App__header} ${css.header}`}>
				<div className={`${css.header__logo}`}><img src="https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg" alt="" /></div>
			</div>
	)
}

export default Header;
