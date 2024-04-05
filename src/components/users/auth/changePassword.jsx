import { useState } from 'react';
import ButtonForm from '../../inputs/buttonForm';
import GroupInput from '../../inputs/groupInput';
import MessageError from '../../inputs/messageError';
import Swal from 'sweetalert2';
import {
	useLoginMutation,
	useUpdateUserMutation,
} from '../../../storage/features/userSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ChangePassword() {
	const [error, setError] = useState({
		error: false,
		messageError: 'error',
		target: null,
	});
	const [newPassword, setNewPassword] = useState('');
	const [repitPassword, setRepitPassword] = useState('');
	const [currentPassword, setCurrenttPassword] = useState('');
	const [login] = useLoginMutation();

	const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

	const [updateUser] = useUpdateUserMutation();
	const user = useSelector((state) => state.auth.user);

	const handleOnChangeNewPassword = (e) => {
		setError({ error: false });
		setNewPassword(e.target.value);
	};

	const handleOnChangeRepitPassword = (e) => {
		setError({ error: false });
		setRepitPassword(e.target.value);
	};

	const handleOnChangeCurrentPassword = (e) => {
		setError({ error: false });
		setCurrenttPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		setError({ error: false });
		e.preventDefault();
		const newUser = {
			id: user.id,
			password: newPassword,
		};
		if (newPassword != repitPassword) {
			setError({ error: true, messageError: 'The passwords do not match' });
			return;
		}
		if (!regex.test(newPassword) || !regex.test(repitPassword)) {
			setError({
				error: true,
				messageError:
					'Password must be at least 8 characters and contain only special characters and start with Uppercase',
			});
			return;
		}
		const resLogin = await login({
			email: user.email,
			password: currentPassword,
		});
		console.log(resLogin);
		if (resLogin.error) {
			setError({
				error: true,
				messageError: 'current password incorrect',
				target: 'oldPassword',
			});
			return;
		}
		const responseUpdate = await updateUser(newUser);
        if(responseUpdate.error) {
            Swal.fire({
				position: 'bottom-end',
				icon: 'error',
				title: 'Error updating user',
				text: responseUpdate.error.data.message,
				showConfirmButton: true,
			})
        }else{
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Update Password',
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                Navigate('/user');
            });
        }
	};

	return (
		<section className="mt-7">
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg"
			>
				<GroupInput
					id="oldPassword"
					name="Old password"
					type="password"
					isRequired="true"
					key="oldPassword"
					error={
						error.error == true && error.target == 'oldPassword'
							? error
							: null
					}
					onChange={handleOnChangeCurrentPassword}
				/>
                {error.error == true && error.target == 'oldPassword' ? (
					<MessageError
						message={error.messageError}
						isMessageGeneral="false"
					/>
				) : null
                }
				<br />
				<GroupInput
					id="newPassword"
					name="New password"
					type="password"
					isRequired="true"
					key="newPassword"
					error={
						error.error == true && error.target == null ? error : null
					}
					onChange={handleOnChangeNewPassword}
				/>
				<GroupInput
					id="repitNewPassword"
					name="Repit new password"
					type="password"
					isRequired="true"
					key="repitNewPassword"
					error={
						error.error == true && error.target == null ? error : null
					}
					onChange={handleOnChangeRepitPassword}
				/>
				{error.error == true && error.target == null ? (
					<MessageError
						message={error.messageError}
						isMessageGeneral="true"
					/>
				) : null}
				<ButtonForm text="Update" type="submit" />
			</form>
		</section>
	);
}
