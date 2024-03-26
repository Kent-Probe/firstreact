import { Link } from 'react-router-dom';

export default function LoginForm() {
	return (
		<section className='mt-7'>
			<form className="max-w-md mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg">
				<div className="mb-4">
					<label
						className="block text-gray-300 font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						required
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 focus:bg-white 
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
						className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 focus:bg-white 
                        invalid:border-pink-500 invalid:border-2 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
						id="password"
						type="password"
						placeholder="Password"
						name="password"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-teal-800 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Login
					</button>
				</div>
			</form>
			<div className="text-center text-gray-300">
				¿No tienes una cuenta?{' '}
				<Link to="/register" className="text-teal-500 hover:text-teal-700">
					Regístrate aquí
				</Link>
			</div>
		</section>
	);
}
