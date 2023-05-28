import React from "react";
import css from "./People.module.css"
// import * as axios from 'axios'
import axios, * as others from 'axios';
import userPhoto from "../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"

let People = (props) => {


	// let state= [
	// 		{
	// 			id: 1,
	// 			fullName: 'Ivan Poddubniy',
	// 			followed: true,
	// 			imgURL: 'https://klike.net/uploads/posts/2019-03/1551511793_14.jpg',
	// 			country: 'Russia',
	// 			city: 'Moscow',
	// 			status: 'I like procrastination',
	// 		},
	// 		{
	// 			id: 2,
	// 			fullName: 'vasiliy Ryabuhin',
	// 			followed: false,
	// 			imgURL: 'https://klike.net/uploads/posts/2019-03/1551511793_14.jpg',
	// 			country: 'Russia',
	// 			city: 'Moscow',
	// 			status: 'Do you like flight without passport',
	// 		},
	// 		{
	// 			id: 3,
	// 			fullName: 'Jigalo Pedrovich',
	// 			followed: false,
	// 			imgURL: 'https://klike.net/uploads/posts/2019-03/1551511793_14.jpg',
	// 			country: 'Russia',
	// 			city: 'Moscow',
	// 			status: 'Never give up',
	// 		},
	// 	];
if(props.users.length === 0){
	axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
		props.setUsers(response.data.items);
	})
}

	return (<div>
		<h2>People</h2>
		<div className={css.users__container}>
		{
			props.users.map(u => <div key={u.id}>
				<div className={css.user__item}>
					<div>
						<img className={css.users__ava} src={u.photos.small != null ? u.photos.small : userPhoto} alt="/\ox" />
						<div><button onClick={()=>{
							u.followed ? props.unfollow(u.id): props.follow(u.id)
							}}>{u.followed ? "Unfollow" : "Follow"}</button>
							</div>
					</div>
					<div>
						<div className={css.full__name}>{u.name}</div>
						<div className={css.location}>
							<div className={css.country}>"u.country"</div>
							<div className={css.city}>"u.city"</div>
						</div>
						<div className={css.status}>{u.status}</div>
					</div>
				</div>
				</div>
			)
		}
		</div>
		<div><button>Show more</button></div>
	</div>)
}

export default People