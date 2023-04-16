// import logo from './logo.svg'; 
import './nullStyle.css'
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



const App = () => {
	return (
		<div className='App'>
			<Header />
			<Sidebar />
			<Profile />
		</div>)
		;
}




export default App;
