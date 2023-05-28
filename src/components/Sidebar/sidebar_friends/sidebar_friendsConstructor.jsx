import { connect } from 'react-redux';
import SidebarFriends from './sidebar_friends';

// const SidebarFriendsContainer = (props) => {

// 	return <StoreContext.Consumer>
// 		{store => {
// 			const ReturnFriends=(store)=> {
// 				let arrayOfIndex = [];
// 				let state = store.getState().Sidebar.friends
// 				let newIndex = (number) => Math.floor(Math.random() * state.length)

// 				generateArray(arrayOfIndex, newIndex);
// 				let items = arrayOfIndex.map(i => {
// 					return <div className={css.friends__item}>
// 						<div className="friends__img"><img src={state[i].imgUrl} alt="/\ox" /></div>
// 						<div className="friends__name">{state[i].name}</div>
// 					</div>
// 				})

// 				return items;

// 			}

// 			let generateArray = (array, digit) => {
// 				let number
// 				while (array.length < 3) {
// 					number = digit();
// 					if (!(array.includes(number))) {
// 						array.push(number);
// 					}
// 				};
// 				return array;
// 			}
// 			return <SidebarFriends friends={ReturnFriends(store)}/>
// 		}}

// 	</StoreContext.Consumer>

// }

let mapStateToProps= (state)=>{
	return {
		state: state.Sidebar.friends,
	}
}

let mapDispatchToProps=()=>{
	return{}
}



let SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarFriends);

export default SidebarFriendsContainer;
