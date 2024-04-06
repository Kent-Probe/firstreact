import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../storage/features/authSlice';
import DropDownMenu from './buttons/dropDown';

const navigation = [
	{
		name: 'Home',
		to: '/',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: true,
	},
	{
		name: 'Users',
		to: '/user',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: false,
	},
	{
		name: 'Houses',
		to: '/house',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: false,
	},
	{
		name: 'Add House',
		to: '/add_house',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: false,
	},
];

export function OptHeader({ name, to, className }) {
	return (
		<Link to={to} className={className}>
			{name}
		</Link>
	);
}

function Header() {
	const user = useSelector((state) => state.auth.user);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		localStorage.removeItem('session');
		navigate('/login');
	};

	navigation.map((item, idenx) => {
		if (item.to === location.pathname) {
			navigation[idenx].className =
				'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium';
			navigation[idenx].current = true;
		} else {
			navigation[idenx].className =
				'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
			navigation[idenx].current = false;
		}
	});

	return (
		<header className="bg-gray-800 shadow-md">
			<div className="m-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="h-8 w-auto"
								src="https://campus.talentotechbogota.co/favicon.ico"
								alt="Your Company"
							/>
						</div>
						<nav className="hidden sm:ml-6 sm:block">
							<ul className="flex space-x-4">
								{navigation.map((item, index) => {
									if (!isAuthenticated && item.to == '/user')
										return null;
									return (
										<li key={index}>
											<OptHeader
												to={item.to}
												className={item.className}
												name={item.name}
											/>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
					<div className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 px-5">
						{isAuthenticated ? (
							<>
								<DropDownMenu
									name={user.name}
									onClick={handleLogout}
									src={user.avatar}
									id={user.id}
								/>
							</>
						) : (
							<OptHeader
								to={'/login'}
								name={'Login'}
								className={
									'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
								}
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
