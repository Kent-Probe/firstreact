import {
	useCreateUserMutation,
	useGetUserByIdQuery,
	useUpdateUserMutation,
	useUploadAvatarMutation,
} from '../../storage/features/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageError from '../PageError';
import InputFile from '../inputs/inputFile';
import { useState } from 'react';

export function ButtonForm({ text, type = 'submit' }) {
	return (
		<div className="flex items-center justify-center">
			<button
				className="bg-teal-800 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
				type={type}
			>
				{text}
			</button>
		</div>
	);
}

export function GroupInput({
	name,
	type,
	id,
	isRequired = false,
	user = null,
}) {
	// Definir los atributos según el tipo de input
	let inputProps = {};
	if (type === 'number') {
		inputProps.min = '1';
		inputProps.max = '999999999999999';
	} else if (type === 'text' || type === 'password') {
		inputProps.minLength = '3';
	}

	// Agregar el atributo required si es necesario
	if (isRequired) {
		inputProps.required = true;
	}

	// Verificar si se proporcionó un usuario y si es así, establecer el valor del input
	if (user != null) {
		inputProps.defaultValue = user;
	}

	return (
		<div className="mb-4">
			<label className="block text-gray-300 font-bold mb-2" htmlFor={id}>
				{name}
			</label>
			<input
				{...inputProps}
				className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500"
				id={id}
				type={type}
				name={name}
				placeholder={name}
			/>
		</div>
	);
}

export default function UserForm() {
	const navigate = useNavigate();
	const params = useParams();
	const [createUser] = useCreateUserMutation();
	const [updateUser] = useUpdateUserMutation();
	const [uploadAvatar] = useUploadAvatarMutation();
	const [file, setFile] = useState(null)
	let user = null;

	if (params.id) {
		const { data, isLoading, isError, error } = useGetUserByIdQuery(
			params.id,
		);
		if (isLoading)
			return (
				<div className="flex items-center justify-center h-screen">
					<span className="loader"></span>
				</div>
			);
		else if (isError)
			return (
				<PageError status={error.status} message={error.data.message} />
			);
		console.log(error);
		user = data;
	}
	const handleChangeFile= (e) =>{
		setFile(e.target.files)
	}
	const handleSubmitUpdate = async (e) => {
		e.preventDefault();
		const newUser = {
			id: e.target.id.value,
		};
		if (e.target.name.value) {
			newUser.name = e.target.name.value;
		}
		if (e.target.email.value) {
			newUser.email = e.target.email.value;
		}
		if (e.target.lastname.value) {
			newUser.lastname = e.target.lastname.value;
		}
		console.log(newUser);
		const responseUpdate = await updateUser(newUser);
		if (responseUpdate.error) {
			Swal.fire({
				position: 'bottom-end',
				icon: 'error',
				title: 'Error creating user',
				text: responseUpdate.error.data.message,
				showConfirmButton: true,
			}).then(() => {
				navigate('/user');
			});
		} else {
			if(file){
				const formData = new FormData()
				formData.append('file', file[0])
				uploadAvatar({id: newUser.id, file: formData});
			}
			Swal.fire({
				position: 'bottom-end',
				icon: 'success',
				title: 'User updating success',
				text: responseUpdate.data.message,
				showConfirmButton: false,
				timer: 3000,
			}).then(() => {
				navigate('/user');
			});
		}
	};

	const handleSubmitCreated = async (e) => {
		e.preventDefault();
		const newUser = {
			id: e.target.id.value,
			name: e.target.name.value,
			lastname: e.target.lastname.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		const userCreated = await createUser(newUser);
		if (userCreated.error) {
			Swal.fire({
				position: 'bottom-end',
				icon: 'error',
				title: 'Error creating user',
				text: userCreated.error.data.message,
				showConfirmButton: true,
			}).then(() => {
				navigate('/register');
			});
		} else {
			if(file){
				const formData = new FormData()
				formData.append('file', file[0])
				uploadAvatar({id: newUser.id, file: formData});
			}
			Swal.fire({
				position: 'bottom-end',
				icon: 'success',
				title: 'User registration success',
				text: userCreated.data.message,
				showConfirmButton: false,
				timer: 3000,
			}).then(() => {
				navigate('/register');
			});
		}
	};
	const formInfo = [
		{
			name: 'Identification',
			type: 'number',
			id: 'id',
			isRequired: true,
			user: user ? user.id : null,
		},
		{
			name: 'Name',
			type: 'text',
			id: 'name',
			isRequired: user ? false : true,
			user: user ? user.name : null,
		},
		{
			name: 'Lastname',
			type: 'text',
			id: 'lastname',
			isRequired: user ? false : true,
			user: user ? user.lastname : null,
		},
		{
			name: 'Email',
			type: 'email',
			id: 'email',
			isRequired: user ? false : true,
			user: user ? user.email : null,
		},
		{
			name: 'Password',
			type: 'password',
			id: 'password',
			isRequired: 'true',
		},
	];
	return (
		<section className="mt-7">
			<form
				onSubmit={
					params.id == null ? handleSubmitCreated : handleSubmitUpdate
				}
				className="max-w-md mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg"
			>
				{formInfo.map((form) => {
					if (params.id == null || form.name != 'Password') {
						return (
							<>
								<GroupInput
									key={form.name}
									name={form.name}
									type={form.type}
									id={form.id}
									isRequired={form.isRequired}
									user={form.user}
								/>
							</>
						);
					}
				})}
				<InputFile key="uploadFile" props={{
					handleChangeFile: handleChangeFile
				}}/>
				{params.id == null ? (
					<ButtonForm key="btn-register" text="Register" type="submit" />
				) : (
					<ButtonForm key="btn-update" text="Save register" type="submit" />
				)}
			</form>
		</section>
	);
}
