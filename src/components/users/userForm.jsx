export default function UserForm() {
	return (
		<section>
			<form className="max-w-md mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg">
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="identification"
					>
						Identification
					</label>
					<input
						required
						/*  min="100"
                        max="999999999999999" */
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
						id="identification"
						type="number"
						name="id"
						placeholder="Identification"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						required
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
						id="name"
						type="text"
						placeholder="Name"
						name="name"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="lastname"
					>
						Lastname
					</label>
					<input
						required
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
						id="lastname"
						type="text"
						placeholder="Lastname"
						name="lastname"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						required
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
						id="email"
						type="email"
						placeholder="Email"
						name="email"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						required
						minLength="3"
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
						id="password"
						type="password"
						placeholder="Password"
						name="password"
					/>
				</div>
				<div className="flex items-center justify-center">
					<button
						className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Register
					</button>
				</div>
			</form>
		</section>
	);
}
