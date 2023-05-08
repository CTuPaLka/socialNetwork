// import logo from './logo.svg'; 
import './nullStyle.css'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Sidebar state={props.state.Sidebar}/>
				<Routes>
					<Route path='/'  element={<Profile addPost={props.addPost} updatePostText={props.updatePostText} state={props.state.Profile}/>}/>
					<Route path='/profile'   element={<Profile updatePostText={props.updatePostText} addPost={props.addPost} state={props.state.Profile}/>}/>
					<Route path='/messages/*' element={<Dialogs state={props.state.Dialogs}/>}/>
					<Route path='/news'  element={<News />}/>
					<Route path='/music'  element={<Music />}/>
					<Route path='/settings'  element={<Settings />}/>
				</Routes>
				{/* <Profile /> */}
			</div>
		</BrowserRouter>
		);
}




export default App;
