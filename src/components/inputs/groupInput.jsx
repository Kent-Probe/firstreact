export default function GroupInput({
	name,
	type,
	id,
	isRequired = false,
	data = null,
	error = null,
	onChange = null,
	valuesSelect,
	defaultValue = null
}) {
	// Definir los atributos según el tipo de input
	let inputProps = {};
	if (type === 'number') {
		inputProps.min = '1';
		inputProps.max = '9999999999999999';
	} else if (type === 'text' || type === 'password') {
		inputProps.minLength = '3';
	}

	// Agregar el atributo required si es necesario
	if (isRequired) {
		inputProps.required = true;
	}

	// Verificar si se proporcionó un usuario y si es así, establecer el valor del input
	if (data != null) {
		if(defaultValue == null) inputProps.defaultValue = data;
		else if(id == "state") inputProps.defaultValue = defaultValue;
	}

	if (type.toLowerCase() == 'select' && valuesSelect) {
		return (
			<div className="mb-4">
				<label className="block text-gray-300 font-bold mb-2" htmlFor={id}>
					{name}
				</label>
				<select
					{...inputProps}
					className="shadow bg-slate-50 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-2xl "
					id={id}
					name={name}
					onChange={onChange}
					defaultValue={defaultValue}
				>
					{valuesSelect.map((value) => {
						return (
							<option key={value.name} data-name={value.name} value={value.id} className="appearance-none shadow bg-slate-50 dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-900 dark:text-white leading-tight  focus:shadow-2xl overflow-auto -scroll">
								{value.name}
							</option>
						);
					})}
				</select>
			</div>
		);
	}

	return (
		<div className="mb-4">
			<label className="block text-gray-300 font-bold mb-2" htmlFor={id}>
				{name}
			</label>
			<input
				{...inputProps}
				className={`${
					error != null
						? 'border-pink-500 text-pink-600 focus:border-pink-500 border-2 focus:ring-pink-500'
						: ''
				} appearance-none shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 invalid:border-2 focus:invalid:ring-pink-500`}
				id={id}
				type={type}
				name={id}
				placeholder={name}
				onChange={onChange}
			/>
		</div>
	);
}
