import ButtonForm from '../inputs/buttonForm';
import GroupInput from '../inputs/groupInput';
import InputFile from '../inputs/inputFile';

export default function HouseShow({
	formInfo,
	handleSubmit,
	handleChangeFile,
	textBtn,
}) {
	const sizeForm = Math.ceil(formInfo.length / 2);
	console.log(sizeForm);
	return (
		<section className="mt-7">
			<form
				onSubmit={handleSubmit}
				className="max-w-2xl mx-auto px-5 py-5 pt-6 pb-10 mb-4 bg-gray-800 rounded-lg shadow-lg"
			>
				<div className="grid grid-cols-2 gap-4">
					{formInfo.map((form) => (
						<GroupInput
							key={form.id}
							name={form.name}
							type={form.type}
							id={form.id}
							isRequired={form.isRequired}
                            data={form.data}
						/>
					))}
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
