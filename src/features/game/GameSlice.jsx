import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	elements: [".", ".", ".", ".", ".", ".", ".", ".", "."],
};

export const GameSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setArray: (state, action) => {
			state.elements[action.payload.id] = action.payload.value;
		},
	},
});

export const { setArray } = GameSlice.actions;

export default GameSlice.reducer;
