export default function GroupInput({
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