import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import GameSlicer from "../features/game/GameSlice";
export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		boardelements: GameSlicer,
	},
});
