import { useDispatch, useSelector } from 'react-redux';
import { decrement, division, increment, multiplication, reset } from '../storage/features/numberSlice';

function Profile({ user }) {
	return (
		<>
			<div className="bg-gray-800 p-4 rounded-lg shadow-md">
				<h1 className="text-white text-xl font-semibold mb-2">{user.name}</h1>
				<img
					className="avatar rounded-full"
					src={user.imageUrl}
					alt={'Photo of ' + user.name}
					style={{
						width: user.imageSize,
						height: user.imageSize,
					}}
				/>
			</div>
		</>
	);
}

function ButtonExample() {
	const number = useSelector((state) => state.number.value);
	const dispatch = useDispatch();
	
	return (
		<>
			<button
				className="ml-4 bg-blue-900 hover:bg-blue-800 text-blue-50 rounded font-bold py-2 px-4 shadow-md"
				onClick={() => console.log(import.meta.env.VITE_APIHOUSE)}
			>
				Sumar
			</button>
			<button
				className="ml-4 bg-red-900 hover:bg-red-800 text-blue-50 rounded font-bold py-2 px-4 shadow-md"
				onClick={() => dispatch(decrement())}
			>
				Restar
			</button>
			<button
				className="ml-4 bg-amber-900 hover:bg-amber-800 text-blue-50 rounded font-bold py-2 px-4 shadow-md"
				onClick={() => dispatch(division())}
			>
				Dividir entre 2
			</button>
			<button
				className="ml-4 bg-yellow-900 hover:bg-yellow-800 text-blue-50 rounded font-bold py-2 px-4 shadow-md"
				onClick={() => dispatch(multiplication())}
			>
				Multiplicar entre 2
			</button>
			<button
				className="ml-4 bg-green-900 hover:bg-green-800 text-blue-50 rounded font-bold py-2 px-4 shadow-md"
				onClick={() => dispatch(reset())}
			>
				Resetear
			</button>
			<p className="mx-4 text-white"> El contador va en: {number}</p>
		</>
	);
}

export default function Example() {
	const saludar = () => {
		alert('hola');
	};

	const mostrarTexto = (e) => {
		console.log(e.target.value);
	};

	const keyUp = () => {
		console.log('Solo una tecla');
	};

	const users = [
		{
			name: 'Elvis Presley',
			imageUrl:
				'https://hips.hearstapps.com/hmg-prod/images/singer-elvis-presley-news-photo-1590531497.jpg',
			imageSize: 90,
		},
		{
			name: 'Brad Pitt',
			imageUrl:
				'https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg',
			imageSize: 90,
		},
		{
			name: 'Madonna',
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATslgVY87n3lp3XHUlxF8Edc6jubIVkmbg&usqp=CAU',
			imageSize: 90,
		},
		{
			name: 'Zinedine Zidane',
			imageUrl:
				'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--c477d5d0-4f24-486c-9984-5f07beef79fd/_330186270595.app.png?preferwebp=true&width=312',
			imageSize: 90,
		},
	];

	return (
		<>
			<section className="p-10 mt-7 bg-gray-900">
				<div className="grid grid-cols-2 gap-4">
					{users.map((user) => (
						<Profile key={user.name} user={user} />
					))}
				</div>
				<br />
				<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md" onClick={() => saludar()}>
					Enviar
				</button>
				<input type="text" onChange={mostrarTexto} onKeyUp={keyUp} className="rounded-md p-2 mt-4 bg-gray-800 text-white" />
				<br />
				<div className="mt-4">
					<ButtonExample />
					<ButtonExample />
					<ButtonExample />
				</div>
			</section>
		</>
	);
}
