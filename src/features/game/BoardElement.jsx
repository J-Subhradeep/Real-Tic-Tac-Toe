import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArray } from "./GameSlice";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
export default function (props) {
	console.log(props);
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
	useEffect(() => {
		return () => {
			window.addEventListener("beforeunload", function (e) {
				localStorage.clear();
			});
		};
	});
	const array = useSelector((state) => state.boardelements.elements);
	const [classname, setClassname] = useState(classesOfBoard[props.id]);
	useEffect(() => {
		setClassname(classesOfBoard[props.id]);
	}, []);

	const dispatch = useDispatch();
	return (
		<>
			<div
				className={classname}
				onClick={() =>
					dispatch(
						setArray({
							id: props.id,
							value: localStorage.getItem("sym")
								? localStorage.getItem("sym")
								: "X",
						})
					)
				}
				onMouseEnter={() => {
					if (!classname.includes("hover_on_board_element")) {
						setClassname(classname + " hover_on_board_element");
					}
				}}
				onMouseLeave={() => {
					// let string = classname.split(" ");
					// string.pop();
					// setClassname(string.join(" "));
					setClassname(classesOfBoard[props.id]);
				}}
			>
				<h1 className="boardSigns">
					{array[props.id] == "X" ? (
						<ClearOutlinedIcon
							style={{
								fontSize: "4rem",
							}}
						/>
					) : (
						""
					)}
					{array[props.id] == "O" ? (
						<CircleOutlinedIcon
							style={{
								fontSize: "4rem",
							}}
						/>
					) : (
						""
					)}
				</h1>
			</div>
		</>
	);
}
