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
		},
		reset: (state) => {
            state.value = 0;
        },
		division: (state) => {
			state.value /= 2;
		},
        multiplication: (state) => {
            state.value *= 2;
        }
	},
});

export const { increment, decrement, reset, division, multiplication } = numberSlice.actions;
export default numberSlice.reducer;
