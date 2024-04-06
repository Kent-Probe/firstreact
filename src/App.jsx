import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import UserList from './components/users/usersList';
import Example from './components/example';
import LoginForm from './components/users/auth/LoginForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginSucces } from './storage/features/authSlice';
import PrivateRoute from './components/private/privateRouter';
import UserShow from './components/users/userShow';
import UserRegister from './components/users/userRegister';
import ChangePassword from './components/users/auth/changePassword';
import HouseList from './components/houses/houseList';
import HouseUpdate from './components/houses/houseUpdate';
import HouseCreate from './components/houses/houseCreate';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const sessionData = localStorage.getItem('session');
		if (sessionData) {
			dispatch(loginSucces(JSON.parse(sessionData)));
		}
	});
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route
							path="/user"
							element={<PrivateRoute Component={UserList} />}
						/>
						<Route
							path="/user/:id"
							element={<PrivateRoute Component={UserShow} />}
						/>
						<Route
							path="/user/deleted/:id"
							element={<PrivateRoute Component={UserList} />}
						/>
						<Route
							path="/house"
							element={<PrivateRoute Component={HouseList} />}
						/>
						<Route
							path="/add_house"
							element={<PrivateRoute Component={HouseCreate} />}
						/>
						<Route
							path="/house/:code"
							element={<PrivateRoute Component={HouseUpdate} />}
						/>
						<Route
							path="/house/deleted/:code"
							element={<PrivateRoute Component={HouseList} />}
						/>
						<Route path="/" element={<Example />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/register" element={<UserRegister />} />
						<Route path="/change_password" element={<ChangePassword />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
