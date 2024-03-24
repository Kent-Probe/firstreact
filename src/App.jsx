import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import UserList from './components/users/usersList';
import Example from './components/example';
import UserForm from './components/users/userForm';
import LoginForm from './components/auth/LoginForm';

function App() {
	return (
		<>
		<div className='min-h-screen flex flex-col'>
			<BrowserRouter>
				<Header />
				<Routes>
          			<Route path="/" element={<Example />} />
					<Route path="/user" element={<UserList />} />
					<Route path='/login' element={<LoginForm/>} />
					<Route path='/register' element={<UserForm/>} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
		</>
	);
}

export default App;
