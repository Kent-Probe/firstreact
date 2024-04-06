export default function TableHead({headerTh}) {
	
	return (
		<thead>
			<tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
				{headerTh.map((head) => (
					<th key={head.name} className={`py-3 px-6 ${head.className}`}>{head.name}</th>
				))}
			</tr>
		</thead>
	);
}
