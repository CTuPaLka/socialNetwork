const addMessage = "ADD-MESSAGE";
const updateMessageText = "UPDATE-MESSAGE-TEXT"

export const updateMessageTextCreator = (newText)=>({
	type: updateMessageText,
	newText: newText
});
export const addMessageCreator = ()=>({ type: addMessage });

let initializationState={
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
	],
	newMessageText: "",
}

const dialogsReducer = (state=initializationState, action)=>{
	switch(action.type){
		case addMessage:
			let newMessage = {
				message: state.newMessageText,
				who: "me" 
			}
			state.messagesData.push(newMessage);
			state.newMessageText = "";
			return state
		case updateMessageText:
			state.newMessageText = action.newText;
			return state
		default:
			return state
	}

}

export default dialogsReducer;