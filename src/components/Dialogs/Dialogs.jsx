import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = () => { return ({ isActive }) => isActive ? css.dialogs__active + ' ' + css.dialogs__name : css.dialogs__name }
const DialogsName=(props)=>{ 
	const path = "/messages/"+ props.id;
	return (<div className={css.dialogs__item}>
		<img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="" />
		<NavLink className={setActive()} to={path}>{props.name}</NavLink>
	</div>) 
}
const DialogsMessage=(props)=>{ 
	return (
		<div className={css.dialogs__message}>
			{props.message}
		</div>
	)
}


const Dialogs = (props) => {
	return (
		<div className={`${css.App__dialogs} ${css.dialogs}`}>
			<div className={`${css.dialogs__names}`}>
				<DialogsName name='Nikita' id='1'/>
				<DialogsName name='Stas' id='2'/>
				<DialogsName name='Gena' id='3'/>
				<DialogsName name='Turbo' id='4'/>
				<DialogsName name='Tyusha Metelkin' id='5'/>
				<DialogsName name='Alex' id='6'/>
				<DialogsName name='Inokentyy' id='7'/>
			</div>

			<div className={css.dialogs__messages}>
				<DialogsMessage message="hello"/>
				<DialogsMessage message="What qre you doing tomorrow?"/>
				<DialogsMessage message="We gonna play basketball"/>
			</div>
		</div>
	)
}

export default Dialogs;
