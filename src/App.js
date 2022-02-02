import React, { useEffect } from "react";
import "./App.css";
import Game from "./features/game/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login";
function App() {
	useEffect(() => {
		window.onload = ()=>{
			var colours=['#2196f3','#e91e63','#ffeb3b','#74ff1d'];
          var arr = ["X","O"];
        setInterval(() => {
            const sec = document.querySelector('section');
            const square = document.createElement('span');
            square.classList.add("bg");
            var size = Math.random()*50;
            square.innerHTML=arr[Math.floor(Math.random() * arr.length)];

            square.style.width = 200 + size + 'px';
            square.style.height = 200 + size + 'px';

            square.style.right = Math.random() * window.innerWidth + 'px';
            square.style.left = Math.random() * window.innerWidth + 'px';
            square.style.top = Math.random() * window.innerHeight+ 'px';
            

            const colour = colours[Math.floor(Math.random() * colours.length)];
            square.style.color=colour;
            sec.appendChild(square);
            setTimeout(()=>{
                square.remove();
            },5000);
        },200);
		}
	}, []);
	
	return (
		<div className="App">
			<section className="bg_animation"></section>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Game />} />
					<Route exact path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
