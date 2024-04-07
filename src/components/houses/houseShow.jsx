import { useState } from 'react';
import {
	useGetDepartamentsQuery,
	useLazyGetCitiesByDepartamentsQuery,
} from '../../storage/features/apiColombia';
import PageError from '../PageError';
import ButtonForm from '../inputs/buttonForm';
import GroupInput from '../inputs/groupInput';
import InputFile from '../inputs/inputFile';

export default function HouseShow({
	formInfo,
	handleSubmit,
	handleChangeFile,
	textBtn,
}) {
	const indexCities = formInfo.findIndex((form) => form.id === 'city');
	const indexState = formInfo.findIndex((form) => form.id === 'state');
	const [selectDepartam, setSelectDepartam] = useState(5);
	const [cities, setCisites] = useState([{ id: 5, name: 'Bogotá D.C.' }]);
	const [departamentoSeleccionado, setDepartamentoSeleccionado] =
		useState(false);

	const {
		data: departaments,
		isLoading,
		isError,
		error,
	} = useGetDepartamentsQuery();
	const [getCities] = useLazyGetCitiesByDepartamentsQuery();
	if (isLoading)
		return (
			<div className="flex items-center justify-center h-screen">
				<span className="loader"></span>
			</div>
		);
	else if (isError)
		return <PageError status={error.status} message={error.data.message} />;

	formInfo[indexState].valuesSelect = departaments;
	formInfo[indexCities].valuesSelect = cities;

	if (!departamentoSeleccionado && formInfo[0].data) {
		const departament = departaments.find(
			(state) =>
				state.name.toLowerCase() ===
				formInfo[indexState].data.toLowerCase(),
		);
		if (departament) {
			setCisites([])
			setSelectDepartam(departament.id);
			setCisites([{ id: 1, name: formInfo[indexCities].data}])
			setDepartamentoSeleccionado(true); // Marcamos que el departamento ha sido seleccionado
		}
	}

	const handleOnChangeDepartament = async (event) => {
		setCisites([]);
		setSelectDepartam(event.target.value);
		const res = await getCities(event.target.value);
		setCisites(res.data);
	};

	return (
		<section className="mt-7">
			<form
				onSubmit={handleSubmit}
				className="max-w-2xl mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg"
			>
				<div className="grid grid-cols-2 gap-4">
					{formInfo.map((form, index) => {
						if (
							form.type.toLowerCase() === 'select' &&
							form.valuesSelect
						) {
							return (
								<GroupInput
									key={form.id}
									name={form.name}
									type={form.type}
									id={form.id}
									isRequired={form.isRequired}
									data={form.data}
									valuesSelect={form.valuesSelect}
									defaultValue={
										index === indexState
											? selectDepartam
											: index === indexCities
											? 1
											: 'yes'
									}
									onChange={
										index === indexState
											? handleOnChangeDepartament
											: null
									}
								/>
							);
						}
						return (
							<GroupInput
								key={form.id}
								name={form.name}
								type={form.type}
								id={form.id}
								isRequired={form.isRequired}
								data={form.data}
							/>
						);
					})}
				</div>

				<InputFile
					key="uploadFile"
					props={{
						handleChangeFile: handleChangeFile,
					}}
				/>
				<ButtonForm key="btn-register" text={textBtn} type="submit" />
			</form>
		</section>
	);
}
