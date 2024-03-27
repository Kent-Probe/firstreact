import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../storage/features/userSlice';
import { useState } from 'react';
import MessageError from '../inputs/messageError';
import Swal from 'sweetalert2';
import GroupInput from '../inputs/groupInput';
import ButtonForm from '../inputs/buttonForm';
import { useDispatch } from 'react-redux';
import { loginSucces } from '../../storage/features/authSlice';

export default function LoginForm() {
	const navigate = useNavigate();
	const [login] = useLoginMutation();
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = {
				email: e.target.email.value,
				password: e.target.password.value,
			};
			const response = await login(user);
			if (response.error) {
				setError(true);
				return;
			} else setError(false);
			localStorage.setItem('session', JSON.stringify(response.data));
			dispatch(loginSucces(response.data))
			Swal.fire({
				position: 'top',
				icon: 'success',
				title: 'Welcome',
				showConfirmButton: false,
				timer: 3000,
			}).then(() => {
				navigate('/user');
			});
		} catch (error) {}
	};
	return (
		<section className="mt-7">
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg"
			>
				<GroupInput
					id="email"
					name="Email"
					type="email"
					isRequired="true"
					key="email"
				/>
				<GroupInput
					id="password"
					name="Password"
					type="password"
					isRequired="true"
					key="password"
				/>
				{error == true ? (
					<MessageError
						message="Invalid Credentials"
						isMessageGeneral="true"
					/>
				) : (
					''
				)}
				<ButtonForm text="Login" type="submit" />
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
