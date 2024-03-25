import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
	name: 'number',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		} 
	},
});

export const { increment, decrement } = numberSlice.actions;
export default numberSlice.reducer;