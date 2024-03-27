export default function ButtonForm({ text, type = 'submit' }) {
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