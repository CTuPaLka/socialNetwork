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
import PeopleContainer from './components/People/PeopleContainer';



const App = (props) => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Sidebar />
				<Routes>
					<Route path='/'  element={<Profile />}/>
					<Route path='/profile'   element={<Profile />}/>
					<Route path='/messages/*' element={<Dialogs />}/>
					<Route path='/news'  element={<News />}/>
					<Route path='/music'  element={<Music />}/>
					<Route path='/settings'  element={<Settings />}/>
					<Route path='/users'  element={<PeopleContainer/>}/>
				</Routes>
				{/* <Profile /> */}
			</div>
		</BrowserRouter>
		);
}




export default App;
