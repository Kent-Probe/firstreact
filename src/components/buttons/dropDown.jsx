import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Option = ({ href, d, name, bgColorVector, hoverColor, onClick }) => {
	
	const className = `flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:${
		hoverColor ? hoverColor : 'border-indigo-700'
	}`
	console.log(className)
	return (
		<Link
			to={href}
			className={className}
			onClick={onClick}
		>
			<div className={`mr-3 ${bgColorVector}`}>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d={d}
					/>
				</svg>
			</div>
			{name}
		</Link>
	);
};

const DropDownMenu = ({ name, src, onClick, id }) => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<div className="border-transparent dark:bg-transparent w-64 flex justify-center items-center relative">
			<div
				className="relative border-transparent py-3 cursor-pointer"
				onClick={toggleMenu}
			>
				<div className="flex justify-center items-center space-x-3">
					<div className="w-11 h-11 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
						<img
							src={`http://localhost:3000/${src}`}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="font-semibold dark:text-white text-gray-900 text-base">
						<div className="cursor-pointer">{name}</div>
					</div>
				</div>
				{open && (
					<div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
						<ul className="space-y-3 dark:text-white">
							<li className="font-medium">
								<Option
									href={`/user/${id}`}
									d={
										'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
									}
									name={'Account'}
								/>
							</li>
							<li className="font-medium">
								<Option
									href={'/change_password'}
									d={
										'M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z M7 11V7a5 5 0 0 1 10 0v4'
									}
									name={'Change password'}
								/>
							</li>
							<hr className="dark:border-gray-700" />
							<li className="font-medium">
								<Option
									name={'Logout'}
									bgColorVector={'text-red-600'}
									hoverColor={'border-red-600'}
									d={
										'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
									}
									onClick={onClick}
								/>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default DropDownMenu;
