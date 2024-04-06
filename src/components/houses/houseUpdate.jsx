import { useNavigate, useParams } from 'react-router-dom';
import { useGetHouseByIdQuery, useUpdateHouseMutation } from '../../storage/features/userSlice';
import HouseShow from './houseShow';
import PageError from '../PageError';
import Swal from 'sweetalert2';

export default function HouseUpdate() {
    const navigate = useNavigate();
	const params = useParams();
    const [updateHouse] = useUpdateHouseMutation()
	const {
		data: house,
		isLoading,
		isError,
		error,
	} = useGetHouseByIdQuery(params.code);
	if (isLoading)
		return (
			<div className="flex items-center justify-center h-screen">
				<span className="loader"></span>
			</div>
		);
	else if (isError)
		return <PageError status={error.status} message={error.data.message} />;
	const formInfo = [
		{
			name: 'Code',
			type: 'text',
			id: 'code',
			isRequired: true,
			data: house[0].code,
		},
		{
			name: 'Address',
			type: 'text',
			id: 'address',
			isRequired: true,
			data: house[0].address,
		},
		{
			name: 'City',
			type: 'text',
			id: 'city',
			isRequired: true,
			data: house[0].city,
		},
		{
			name: 'State',
			type: 'text',
			id: 'state',
			isRequired: true,
			data: house[0].state,
		},
		{
			name: 'Size',
			type: 'text',
			id: 'size',
			isRequired: true,
			data: house[0].size,
		},
		{
			name: 'Type',
			type: 'text',
			id: 'type',
			isRequired: true,
			data: house[0].type,
		},
		{
			name: 'Zipcode',
			type: 'text',
			id: 'zipcode',
			isRequired: true,
			data: house[0].zipcode,
		},
		{
			name: 'Rooms',
			type: 'text',
			id: 'rooms',
			isRequired: true,
			data: house[0].rooms,
		},
		{
			name: 'Bathrooms',
			type: 'text',
			id: 'bathrooms',
			isRequired: true,
			data: house[0].bathrooms,
		},
		{
			name: 'Parking',
			type: 'text',
			id: 'parking',
			isRequired: true,
			data: house[0].parking ? 'yes' : 'no',
		},
		{
			name: 'Price',
			type: 'text',
			id: 'price',
			isRequired: true,
			data: house[0].price,
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newHouse = {
			code: e.target.code.value,
		};
        if (e.target.address.value) {
            newHouse.address = e.target.address.value;
        }
        if (e.target.city.value) {
            newHouse.city = e.target.city.value;
        }
        if (e.target.state.value) {
            newHouse.state = e.target.state.value;
        }
        if (e.target.size.value) {
            newHouse.size = e.target.size.value;
        }
        if (e.target.type.value) {
            newHouse.type = e.target.type.value;
        }
        if (e.target.zipcode.value) {
            newHouse.zipcode = e.target.zipcode.value;
        }
        if (e.target.rooms.value) {
            newHouse.rooms = Number(e.target.rooms.value);
        }
        if (e.target.bathrooms.value) {
            newHouse.bathrooms = Number(e.target.bathrooms.value);
        }
        if (e.target.parking.value) {
            newHouse.parking = e.target.parking.value == "yes";
        }
        if (e.target.price.value) {
            newHouse.price = Number(e.target.price.value);
        }
        console.log(newHouse)
        const res = await updateHouse(newHouse);
        if(res.error){
            Swal.fire({
				position: 'bottom-end',
				icon: 'error',
				title: 'Error updating house',
				text: res.error.data.message,
				showConfirmButton: true,
			})
        }else{
            Swal.fire({
				position: 'bottom-end',
				icon: 'success',
				title: 'House updating success',
				text: res.data.message,
				showConfirmButton: false,
				timer: 3000,
			}).then(() => {
				navigate('/house');
			});
        }
	};

	const handleChangeFile = (e) => {};

	return (
		<HouseShow
			formInfo={formInfo}
			textBtn={'Update'}
			handleChangeFile={handleChangeFile}
			handleSubmit={handleSubmit}
		/>
	);
}
