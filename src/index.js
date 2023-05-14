import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import  store  from './Redux/redux-store';




const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderApp = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	);
}

// вызываем метод перерисовки с учетом текущего state 
rerenderApp(store.getState());

// методу store subscribe мы отдаем в качестве параметра функцию rerenderApp
store.subscribe(()=>{
	let state = store.getState()
	rerenderApp(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
