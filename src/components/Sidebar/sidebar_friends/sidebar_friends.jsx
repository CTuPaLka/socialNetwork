import React from 'react';
import css from './sidebar_friends.module.css';

const SidebarFriends = (props) => {
	let state = props.state
	let ReturnFriends = (state) => {
		let arrayOfIndex = [];
		let newIndex = (number) => Math.floor(Math.random() * props.state.length)

		generateArray(arrayOfIndex, newIndex);
		//! Альтернативный метод создания массива с друзьями
		// let items = []
		// arrayOfIndex.forEach(i => {
		// 		items.push(<div className={css.friends__item}>
		// 			<div className="friends__img"><img src={props.state[i].imgUrl} alt="/\ox" /></div>
		// 			<div className="friends__name">{props.state[i].name}</div>
		// 		</div>)
		// 	})
		let items = arrayOfIndex.map(i => {
			return <div className={css.friends__item}>
				<div className="friends__img"><img src={props.state[i].imgUrl} alt="/\ox" /></div>
				<div className="friends__name">{props.state[i].name}</div>
			</div>
		})

		return items;

	}

	let generateArray = (array, digit) => {
		let number
		while (array.length < 3) {
			number = digit();
			if (!(array.includes(number))) {
				array.push(number);
			}
		};
		return array;
	}
	return (<div className={css.sidebar__friends}>
		<div className={css.friends__title}>Friends</div>
		{ReturnFriends(state)}
	</div>
	)
}


// function ReturnFriends(props) {
// 	let arrayOfIndex = [];
// 	let newIndex = (number) => Math.floor(Math.random() * props.state.length)

// 	generateArray(arrayOfIndex, newIndex);
//    //! Альтернативный метод создания массива с друзьями
// 	// let items = []
// 	// arrayOfIndex.forEach(i => {
// 	// 		items.push(<div className={css.friends__item}>
// 	// 			<div className="friends__img"><img src={props.state[i].imgUrl} alt="/\ox" /></div>
// 	// 			<div className="friends__name">{props.state[i].name}</div>
// 	// 		</div>)
// 	// 	})
// 	let items = arrayOfIndex.map(i => {
// 		return <div className={css.friends__item}>
// 			<div className="friends__img"><img src={props.state[i].imgUrl} alt="/\ox" /></div>
// 			<div className="friends__name">{props.state[i].name}</div>
// 		</div>
// 	})

// 	return items;

// }

// let generateArray = (array, digit) => {
// 	let number
// 	while (array.length < 3) {
// 		number = digit();
// 		if (!(array.includes(number))) {
// 			array.push(number);
// 		}
// 	};
// 	return array;
// }




export default SidebarFriends;
