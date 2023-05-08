import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Store} from './Redux/State'; // data (оно же state)
// import state, { addPost } from './Redux/State';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderApp= (state)=>{
root.render(
	<React.StrictMode>
		<App state={state} updatePostText={Store.updatePostText.bind(Store)} addPost={Store.addPost.bind(Store)}/>
	</React.StrictMode>
);}

rerenderApp(Store.getState());
Store.subscribe(rerenderApp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
