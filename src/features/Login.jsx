import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import $ from "jquery";

// import axios from "axios";
const Login = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({ room: "", client: "" });
	function func(event) {
		setState((prev) => {
			console.log(event.target.name);
			if (event.target.name === "room")
				return { ...prev, room: event.target.value };
			else {
				return { ...prev, client: event.target.value };
			}
		});
	}

	async function makeRequest(data) {
		try {
			const result = await $.ajax({
				url: "http://127.0.0.1:8000/",
				data: data,
				method: "POST",
			});
			return result;
		} catch (err) {
			console.log(err);
		}
	}
	function login() {
		localStorage.setItem("room", state.room);
		localStorage.setItem("name", state.client);
		// axios
		//   .post(`http://127.0.0.1:8000/`, { group_name: state.room })
		//   .then((a) => {
		//     console.log(a.data);
		//     if (!a.data.both) {
		//       navigate("/");
		//     } else {
		//       alert("The room is full");
		//     }
		//   });
		// bothUser({ group_name: state.room });

		makeRequest({ group_name: state.room }).then((a) => {
			console.log(a);
			if (a.is_first) {
				localStorage.setItem("sym", "X");
			} else {
				localStorage.setItem("sym", "O");
			}
			if (!a.both) {
				navigate("/");
			} else {
				alert("The room is full");
			}
		});
		// navigate("/");
	}
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<TextField label="Room Code" name="room" onChange={func} />
			<TextField
				label="Name"
				name="name"
				style={{ marginTop: "10px" }}
				onChange={func}
			/>
			<Button
				color="primary"
				variant="contained"
				style={{ marginTop: "10px" }}
				onClick={login}
			>
				Join
			</Button>
		</div>
	);
};

export default Login;
