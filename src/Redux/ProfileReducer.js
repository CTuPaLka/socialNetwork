const addPost = "ADD-POST";
const updatePostText = "UPDATE-POST-TEXT";

export const addPostCreator = () => ({ type: addPost });
export const updatePostTextCreator = (newText) => ({
	type: updatePostText,
	newText: newText
});

let initializationState = {
	postsData: [
		{ content: 'you are so cool))', likeQuantity: "12", img: 'https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-32.jpg' },
		{ content: 'I agree with a man higher', likeQuantity: "32", img: 'https://60.img.avito.st/image/1/1.lQiSy7a5OeGkYvvktI2RfUloP-sm6DEjI2g75S5iM-M.a0ZsZp-SyusKVc-oRIooFPgRiwPWy1PX-A7fnlTgY1w' },
		{ content: 'I want to be your friend', likeQuantity: "543", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU' },
		{ content: 'fourth post', likeQuantity: "1", img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' }
	],
	newPostText: "",
}

const profileReducer = (state=initializationState, action) => {
switch (action.type) {
		case addPost:{
			let newPost = {
				// content присваиваем значение newPostText из _state
				content: state.newPostText,
				likeQuantity: "0",
				img: '',
			}
			let stateCopy = {...state};
			stateCopy.postsData = [...state.postsData]
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = "";
			return stateCopy;
		}
			
		case updatePostText:{
			let stateCopy = {...state};
			stateCopy.newPostText = action.newText;
			return stateCopy
		}
			
		default:
			return state
	}

	
}

export default profileReducer;