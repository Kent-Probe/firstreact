export default function UserList() {
	return (
		<section className="px-10 flex justify-center pb-10">
			<div className="overflow-hidden rounded-lg min-w-max w-full">
				<table className="min-w-max w-full table-auto">
					<thead>
						<tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
							<th className="py-3 px-6 text-left">Name</th>
							<th className="py-3 px-6 text-left">LastName</th>
							<th className="py-3 px-6 text-left">Email</th>
							<th className="py-3 px-6 text-center">Identification</th>
							<th className="py-3 px-6 text-center">Avatar</th>
						</tr>
					</thead>
					<tbody className="text-gray-400 text-sm font-light">
						<tr className="border-b border-gray-700 hover:bg-gray-700 hover:text-white">
							<td className="py-3 px-6 text-left">Juan</td>
							<td className="py-3 px-6 text-left">Perez</td>
							<td className="py-3 px-6 text-left">juan@correo.com</td>
							<td className="py-3 px-6 text-center">124545</td>
							<td className="py-3 px-6 text-center">
								<img
									className="w-12 h-12 rounded-full"
									src="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/jxn3zttbkrvxudzifk6b"
									alt="Avatar"
								/>
							</td>
						</tr>
						<tr className="border-b border-gray-700 hover:bg-gray-700 hover:text-white">
							<td className="py-3 px-6 text-left">Angela</td>
							<td className="py-3 px-6 text-left">Cardona</td>
							<td className="py-3 px-6 text-left">angela@correo.com</td>
							<td className="py-3 px-6 text-center">454545455</td>
							<td className="py-3 px-6 text-center">
								<img
									className="w-12 h-12 rounded-full"
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amparo_Grisales_2023_01.jpg"
									alt="Avatar"
								/>
							</td>
						</tr>
						<tr className="border-b border-gray-700 hover:bg-gray-700 hover:text-white">
							<td className="py-3 px-6 text-left">Juan</td>
							<td className="py-3 px-6 text-left">Perez</td>
							<td className="py-3 px-6 text-left">juan@correo.com</td>
							<td className="py-3 px-6 text-center">124545</td>
							<td className="py-3 px-6 text-center">
								<img
									className="w-12 h-12 rounded-full"
									src="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/jxn3zttbkrvxudzifk6b"
									alt="Avatar"
								/>
							</td>
						</tr>
						<tr className="border-b border-gray-700 hover:bg-gray-700 hover:text-white">
							<td className="py-3 px-6 text-left">
								Angela
							</td>
							<td className="py-3 px-6 text-left">
								Cardona
							</td>
							<td className="py-3 px-6 text-left">
								angela@correo.com
							</td>
							<td className="py-3 px-6 text-center">
								454545455
							</td>
							<td className="py-3 px-6 text-center">
								<img
									className="w-12 h-12 rounded-full"
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amparo_Grisales_2023_01.jpg"
									alt="Avatar"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
