import React from "react";
import messages from "./Messages";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import music from "./music.mp3";
import getDate from "./getDate";
import BoardElement from "./BoardElement";
import Result from "./Result"; 

const Game = () => {
	const [downarrow, setDownarrow] = useState(true);

	var sound = new Howl({
		src: [music],
	});
	useEffect(() => {
		// sound.play();
	}, []);

	function some() {
		console.log(music);
		Howler.volume(0.5);
	}
	function stop() {
		sound.stop();
	}
	var classesOfBoard = [
		"posn top left",
		"posn top vert",
		"posn top right ",
		"posn left horiz",
		"posn vert horiz",
		"posn right horiz",
		"posn bot left ",
		"posn bot vert",
		"posn bot right",
	];
	return (
		<>
			<div className="fullres">
				<div>
					<i onclick="location.reload()"></i>
				</div>
			</div>
			<div className="main">
				<div id="res" className="boxes result">
					<Result/>
				</div>
				<div id="box" className="boxes">
					{classesOfBoard.map((val, index) => {
						return <BoardElement className={val} key={index} id={index} />;
					})}
				</div>
				<div id="chat" className="boxes">
					<div
						className="chat-screen notscroll"
						onScroll={() => {
							const scrn = document.querySelector(".chat-screen");
							const scrollbtn = document.querySelector(".botarrow");
							scrn.classList.add("wow");
							scrn.classList.remove("notscroll");

							if (
								scrn.clientHeight + scrn.scrollTop >=
								scrn.scrollHeight - 10
							) {
								console.log("scrolled");
								setDownarrow(false);
							} else {
								setDownarrow(true);
							}

							setTimeout(() => {
								scrn.classList.remove("wow");
								scrn.classList.add("notscroll");
							}, 5000);
						}}
					>
						<div className="mySide">
							<div className="my-msg">
								<label>You</label>
								<div>WEll good</div>
								<span>{getDate()}</span>
							</div>
							{messages.map((val, index) => {
								let clas = val.msg_sym == "X" ? "my-msg" : "oth-msg";
								let label = val.msg_sym == "X" ? "You" : "He";
								return (
									<>
										<div className={clas}>
											<label>{label}</label>
											<div>{val.msg}</div>
											<span>{getDate()}</span>
										</div>
									</>
								);
							})}
						</div>
						{downarrow ? (
							<>
								<div
									className="botarrow"
									bgcolor="white"
									onClick={() => {
										const scrn = document.querySelector(".chat-screen");
										scrn.scrollTo({
											top: scrn.scrollHeight,
											behavior: "smooth",
										});
									}}
								>
									<ArrowDropDownCircleIcon id="scrollbot" />
								</div>
							</>
						) : (
							<></>
						)}
					</div>
					<div className="txtarea">
						<textarea
							name="message"
							placeholder="Enter message here"
							id="msg-box"
							cols="30"
							rows="2"
						></textarea>
						<Button
							variant="contained"
							color="error"
							style={{ margin: "10px 0" }}
							onClick={some}
						>
							<SendIcon />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Game;
