import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	disabled: false,
};

export const AbilitySlice = createSlice({
	name: "disable",
	initialState,
	reducers: {
		setAbility: (state) => {
			state.disabled = !state.disabled;
		},
	},
});

export const { setAbility } = AbilitySlice.actions;

export default AbilitySlice.reducer;
