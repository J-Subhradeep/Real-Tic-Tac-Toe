import React from "react";
import "./App.css";
import Game from "./features/game/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/" element={<Game />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
