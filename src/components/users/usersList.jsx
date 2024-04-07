import { Link } from 'react-router-dom';
import {
	useDeletedUserMutation,
	useGetUsersQuery,
} from '../../storage/features/userSlice';
import Swal from 'sweetalert2';
import PageError from '../PageError';
import TableHead from '../table/tableHead';

export default function UserList() {
	const headerTh = [
		{ name: 'Identificacion', className: 'text-center' },
		{ name: 'Name', className: 'text-left' },
		{ name: 'LastName', className: 'text-left' },
		{ name: 'Email', className: 'text-left' },
		{ name: 'Avatar', className: 'text-left' },
		{ name: 'Options', className: 'text-center' },
	];

	/* const users = useSelector((state) => state.users); */
	const [ deletedUser ] = useDeletedUserMutation();

	const { data: users, isLoading, isError, error } = useGetUsersQuery();
	if (isLoading)
		return (
			<div className="flex items-center justify-center h-screen">
				<span className="loader"></span>
			</div>
		);
	else if (isError) return <PageError key={error.status} status={error.status} message={error.data.message} />;

	const handleSubmitDeleted = (e) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async (result) => {
			if (result.isConfirmed) {
				const resultDeleted = await deletedUser(e.target.name)
				console.log(resultDeleted)
				Swal.fire({
					title: 'Deleted!',
					text: 'Your file has been deleted.',
					icon: 'success',
				});
				window.location.reload()
			}
		});
	};

	return (
		<section className="px-10 flex justify-center pb-10 mt-7">
			<div className="overflow-hidden rounded-lg min-w-max w-full">
				<table className="min-w-max w-full table-auto">
					<TableHead headerTh={headerTh}
					/>
					<tbody className="text-gray-400 text-sm font-light">
						{users.map((user) => (
							<tr
								className="border-b border-gray-700 hover:bg-gray-700 hover:text-white"
							>
								<td className="py-3 px-6 text-center">{user.id}</td>
								<td className="py-3 px-6 text-left">{user.name}</td>
								<td className="py-3 px-6 text-left">{user.lastname}</td>
								<td className="py-3 px-6 text-left">{user.email}</td>
								<td className="py-3 px-6 text-center">
									<img
										className="w-12 h-12 rounded-full"
										src={`http://localhost:3000/${user.avatar}`}
										alt="Avatar"
									/>
								</td>
								<td className="py-3 px-6 text-center">
									<div className="flex flex-col">
										<Link
											to={`/user/${user.id}`}
											className="text-white bg-teal-800 hover:bg-teal-600 font-bold py-2 px-4 rounded-md mb-2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-4 h-4 inline mr-1"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
												/>
											</svg>
											Edit
										</Link>
										<button
											onClick={handleSubmitDeleted}
											name={user.id}
											className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-md mb-2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-4 h-4 inline mr-1"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
