import { useNavigate, useParams } from 'react-router-dom';
import { useAddHouseMutation, useGetHouseByIdQuery, useUpdateHouseMutation } from '../../storage/features/userSlice';
import HouseShow from './houseShow';
import PageError from '../PageError';
import Swal from 'sweetalert2';

export default function HouseCreate(){
    const navigate = useNavigate();
    const [addHouse] = useAddHouseMutation()

	const formInfo = [
		{
			name: 'Code',
			type: 'text',
			id: 'code',
			isRequired: true,
		},
		{
			name: 'Address',
			type: 'text',
			id: 'address',
			isRequired: true,
		},
		{
			name: 'City',
			type: 'text',
			id: 'city',
			isRequired: true,
		},
		{
			name: 'State',
			type: 'text',
			id: 'state',
			isRequired: true,
		},
		{
			name: 'Size',
			type: 'number',
			id: 'size',
			isRequired: true,
		},
		{
			name: 'Type',
			type: 'text',
			id: 'type',
			isRequired: true,
		},
		{
			name: 'Zipcode',
			type: 'text',
			id: 'zipcode',
			isRequired: true,
		},
		{
			name: 'Rooms',
			type: 'number',
			id: 'rooms',
			isRequired: true,
		},
		{
			name: 'Bathrooms',
			type: 'number',
			id: 'bathrooms',
			isRequired: true,
		},
		{
			name: 'Parking',
			type: 'text',
			id: 'parking',
			isRequired: true,
		},
		{
			name: 'Price',
			type: 'number',
			id: 'price',
			isRequired: true,
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newHouse = {
			code: e.target.code.value,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            size: Number(e.target.size.value),
            type: e.target.type.value,
            zipcode: e.target.zipcode.value,
            rooms: Number(e.target.rooms.value),
            bathrooms: Number(e.target.bathrooms.value),
            parking: e.target.parking.value == "yes",
            price: Number(e.target.price.value),
		};
        const res = await addHouse(newHouse);
        if(res.error){
            Swal.fire({
				position: 'bottom-end',
				icon: 'error',
				title: 'Error creating house',
				text: res.error.data.message,
				showConfirmButton: true,
			})
        }else{
            Swal.fire({
				position: 'bottom-end',
				icon: 'success',
				title: 'House creating success',
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