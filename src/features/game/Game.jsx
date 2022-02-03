import React from "react";
import messages from "./Messages";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import check from "./Winner";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import music from "./music.mp3";
import { setAbility } from "./DisableBoardSlice";
import BoardElement from "./BoardElement";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
import LowerResult from "./Lower_Result";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Chat from "./Chat";
import { setArray, setFullArray } from "./GameSlice";
const Game = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("name") || !localStorage.getItem("room")) {
			navigate("/login");
		}
	}, []);
	const array = useSelector((state) => state.boardelements.elements);
	const change = useSelector((state) => state.change.change);
	var room = localStorage.getItem("room");
	var symbols = localStorage.getItem("sym");

	const [result, setResult] = useState({
		classs: "fullres",
		title: "",
		msg: "",
	});
	const [win, setWin] = useState(true);
	const [socketUrl, setSocketUrl] = useState(
		"ws://127.0.0.1:8000/ws/board/" + room + "_board" + "/"
	);
	const [messageHistory, setMessageHistory] = useState([]);
	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
	const dispatch = useDispatch();
	useEffect(() => {
		if (lastMessage !== null) {
			setMessageHistory((prev) => prev.concat(lastMessage));
			let arr = JSON.parse(lastMessage.data).array;
			let syms = JSON.parse(lastMessage.data).sym;
			if (syms !== localStorage.getItem("sym")) {
				dispatch(setAbility());
			}
			dispatch(setFullArray(arr));
			console.log("winner or not", check(arr));
			if (check(arr)[0] && check(arr)[1] == localStorage.getItem("sym")) {
				setResult((prev) => {
					return {
						...prev,
						classs: "fullres pass",
						title: "Bingo !😍",
						msg: "Congratulations!🤩",
					};
				});
				setWin(false);
			}
			if (check(arr)[0] && check(arr)[1] != localStorage.getItem("sym")) {
				console.log("loss");
				setResult((prev) => {
					return {
						...prev,
						classs: "fullres fail",
						title: "Oh nooo !😥",
						msg: "Better luck next time🙂",
					};
				});
				setWin(false);
			}
			if (check(arr)[2]) {
				setResult((prev) => {
					return {
						...prev,
						classs: "fullres drawmatch",
						title: "Match Draw !😐",
						msg: "Better luck next time😶",
					};
				});
				setWin(false);
			}
		}
	}, [lastMessage, setMessageHistory]);
	useEffect(() => {
		console.log(array);
		sendMessage(JSON.stringify({ array: array, sym: symbols }));
	}, [change]);
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
		"posn top right",
		"posn left horiz",
		"middle posn vert horiz",
		"posn right horiz",
		"posn bot left",
		"vert posn bot downvert",
		"posn bot right",
	];
	return (
		<>
			<div className={result.classs}>
				<div>
					<span className="result_title">{result.title}</span>
					<span className="result_msg">{result.msg}</span>
				</div>
			</div>
			{win ? (
				<>
					<div class="total_bg">
						<div className="main">
							<div id="res" className="boxes result">
								<Result />
							</div>
							<div id="box" className="boxes">
								{classesOfBoard.map((val, index) => {
									return <BoardElement cname={val} key={index} id={index} />;
								})}
							</div>
							<Chat />
							<LowerResult />
						</div>
						<div class="bg_animation">
							<div class="glowing">
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
							</div>
							<div class="glowing">
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
							</div>
							<div class="glowing">
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
								<span class="glow1"></span>
							</div>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default Game;
