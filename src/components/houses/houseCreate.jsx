import { useNavigate } from 'react-router-dom';
import { useAddHouseMutation } from '../../storage/features/userSlice';
import HouseShow from './houseShow';
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
			type: 'select',
			id: 'city',
			isRequired: true,
		},
		{
			name: 'State',
			type: 'select',
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
			type: 'select',
			id: 'type',
			isRequired: true,
            valuesSelect: [{id: "appartament", name: "appartament"}, {id: "House", name: "House"}]
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
			type: 'select',
			id: 'parking',
			isRequired: true,
            valuesSelect: [{id: "no", name: "no"}, {id: "yes", name: "yes"}]
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
            city: e.target.city.options[e.target.city.selectedIndex].dataset.name,
            state: e.target.state.options[e.target.state.selectedIndex].dataset.name,
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