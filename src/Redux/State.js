

// самый главный обьект класс, который все хранит в себе
export let Store = {
	// если в названии переменной или метода в начеле указано нижнее почеркивание, то автор рекомендует не изменять данную вещь внешним способом (через UI). Т.е. это приватный метод, который мы можем использовать с помощью геттеров (методы, которые через return возвращают приватный метод и после этого мы можем его использовать)
	_state: {
		Sidebar: {
			friends: [
				{ name: 'Nikita', id: '1', imgUrl: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13' },
				{ name: 'Stas', id: '2', imgUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/3930378/pub_60b322993204ed6102ac6bb8_60b322c43204ed6102acb593/scale_1200' },
				{ name: 'Gena', id: '3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMGjc2Bi9uNCmmo5FgcxjiSB58FTyzfignaCWO0WM&s' },
				{ name: 'Turbo', id: '4', imgUrl: 'https://freelance.ru/img/portfolio/pics/00/43/1A/4397647.jpg' },
				{ name: 'Tyusha Metelkin', id: '5', imgUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1874059262520873740/DB4664B2709742EFB6F2421813CD4587BA216564/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' },
				{ name: 'Alex', id: '6', imgUrl: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
				{ name: 'Inokentyy', id: '7', imgUrl: 'https://static.wikia.nocookie.net/3521d6b9-ac47-42ec-b675-c5bdc15f06ef/scale-to-width/755' },
			]
		},
		Profile: {
			postsData: [
				{ content: 'you are so cool))', likeQuantity: "12", img: 'https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-32.jpg' },
				{ content: 'I agree with a man higher', likeQuantity: "32", img: 'https://60.img.avito.st/image/1/1.lQiSy7a5OeGkYvvktI2RfUloP-sm6DEjI2g75S5iM-M.a0ZsZp-SyusKVc-oRIooFPgRiwPWy1PX-A7fnlTgY1w' },
				{ content: 'I want to be your friend', likeQuantity: "543", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU' },
				{ content: 'fourth post', likeQuantity: "1", img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' }
			],
			newPostText: "",
		},

		Dialogs: {
			messagesData: [
				{ message: "hello", who: "me" },
				{ message: "What are you doing tomorrow?", who: "me" },
				{ message: "We gonna play basketball" }
			],
			friendsData: [
				{ name: 'Nikita', id: '1', imgUrl: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13' },
				{ name: 'Stas', id: '2', imgUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/3930378/pub_60b322993204ed6102ac6bb8_60b322c43204ed6102acb593/scale_1200' },
				{ name: 'Gena', id: '3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMGjc2Bi9uNCmmo5FgcxjiSB58FTyzfignaCWO0WM&s' },
				{ name: 'Turbo', id: '4', imgUrl: 'https://freelance.ru/img/portfolio/pics/00/43/1A/4397647.jpg' },
				{ name: 'Tyusha Metelkin', id: '5', imgUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1874059262520873740/DB4664B2709742EFB6F2421813CD4587BA216564/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' },
				{ name: 'Alex', id: '6', imgUrl: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
				{ name: 'Inokentyy', id: '7', imgUrl: 'https://static.wikia.nocookie.net/3521d6b9-ac47-42ec-b675-c5bdc15f06ef/scale-to-width/755' },
			]
		}
	},
	getState() {
		return this._state;
	},
	rerenderApp() { },
	addPost() {
		let newPost = {
			content: this._state.Profile.newPostText,
			likeQuantity: "0",
			img: '',
		}
		this._state.Profile.postsData.push(newPost);
		this.rerenderApp(this._state);
		this._state.Profile.newPostText = "";
	},
	updatePostText(newText) {
		this._state.Profile.newPostText = newText;
		this.rerenderApp(this._state);
	},
	subscribe(observe) {
		this.rerenderApp = observe;
	},
}

// const state = {
// 	Sidebar: {
// 		friends: [
// 			{ name: 'Nikita', id: '1', imgUrl: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13' },
// 			{ name: 'Stas', id: '2', imgUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/3930378/pub_60b322993204ed6102ac6bb8_60b322c43204ed6102acb593/scale_1200' },
// 			{ name: 'Gena', id: '3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMGjc2Bi9uNCmmo5FgcxjiSB58FTyzfignaCWO0WM&s' },
// 			{ name: 'Turbo', id: '4', imgUrl: 'https://freelance.ru/img/portfolio/pics/00/43/1A/4397647.jpg' },
// 			{ name: 'Tyusha Metelkin', id: '5', imgUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1874059262520873740/DB4664B2709742EFB6F2421813CD4587BA216564/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' },
// 			{ name: 'Alex', id: '6', imgUrl: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
// 			{ name: 'Inokentyy', id: '7', imgUrl: 'https://static.wikia.nocookie.net/3521d6b9-ac47-42ec-b675-c5bdc15f06ef/scale-to-width/755' },
// 		]
// 	},
// 	Profile: {
// 		postsData: [
// 			{ content: 'you are so cool))', likeQuantity: "12", img: 'https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-32.jpg' },
// 			{ content: 'I agree with a man higher', likeQuantity: "32", img: 'https://60.img.avito.st/image/1/1.lQiSy7a5OeGkYvvktI2RfUloP-sm6DEjI2g75S5iM-M.a0ZsZp-SyusKVc-oRIooFPgRiwPWy1PX-A7fnlTgY1w' },
// 			{ content: 'I want to be your friend', likeQuantity: "543", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU' },
// 			{ content: 'fourth post', likeQuantity: "1", img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' }
// 		],
// 		newPostText: "",
// 	},

// 	Dialogs: {
// 		messagesData: [
// 			{ message: "hello", who: "me" },
// 			{ message: "What are you doing tomorrow?", who: "me" },
// 			{ message: "We gonna play basketball" }
// 		],
// 		friendsData: [
// 			{ name: 'Nikita', id: '1', imgUrl: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13' },
// 			{ name: 'Stas', id: '2', imgUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/3930378/pub_60b322993204ed6102ac6bb8_60b322c43204ed6102acb593/scale_1200' },
// 			{ name: 'Gena', id: '3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMGjc2Bi9uNCmmo5FgcxjiSB58FTyzfignaCWO0WM&s' },
// 			{ name: 'Turbo', id: '4', imgUrl: 'https://freelance.ru/img/portfolio/pics/00/43/1A/4397647.jpg' },
// 			{ name: 'Tyusha Metelkin', id: '5', imgUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1874059262520873740/DB4664B2709742EFB6F2421813CD4587BA216564/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' },
// 			{ name: 'Alex', id: '6', imgUrl: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
// 			{ name: 'Inokentyy', id: '7', imgUrl: 'https://static.wikia.nocookie.net/3521d6b9-ac47-42ec-b675-c5bdc15f06ef/scale-to-width/755' },
// 		]
// 	}
// }

// export const addPost = () => {
// 	let newPost = {
// 		content: state.Profile.newPostText,
// 		likeQuantity: "0",
// 		img: '',
// 	}
// 	state.Profile.postsData.push(newPost);
// 	rerenderApp(state);
// }

// export const updatePostText = (newText) => {
// 	state.Profile.newPostText = newText;
// 	rerenderApp(state);
// }

// export const subscribe = (observe) => {
// 	rerenderApp = observe;
// }

// export default state;