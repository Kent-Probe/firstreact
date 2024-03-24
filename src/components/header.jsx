import { Link, useLocation } from 'react-router-dom';

const navigation = [
	{
		name: 'Inicio',
		to: '/',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: true,
	},
	{
		name: 'Usuarios',
		to: '/user',
		className:
			'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
		current: false,
	},
];

function Header() {
	const location = useLocation();

	return (
		<header className="bg-gray-800 shadow-md mb-7">
			<div className="m-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="flex flex-shrink-0 items-center">
							<img
								class="h-8 w-auto"
								src="https://campus.talentotechbogota.co/favicon.ico"
								alt="Your Company"
							/>
						</div>
						<nav className="hidden sm:ml-6 sm:block">
							<ul className="flex space-x-4">
								{navigation.map((item, index) => (
									<li key={index}>
										<Link
											to={item.to}
											className={`
                                                ${
																	location.pathname === item.to
																		? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
																		: item.className
																}
                                            `}
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 px-5">
						<Link
							to="/login"
							className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
