import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArray } from "./GameSlice";
const BoardElement = (props) => {
	console.log(props.id);
	const array = useSelector((state) => state.boardelements.elements);
	const [classname, setClassname] = useState(props.className);
	const dispatch = useDispatch();
	return (
		<>
			<div
				className={classname}
				onClick={() => dispatch(setArray({ id: props.id, value: "X" }))}
				onMouseEnter={() => {
					if (!classname.includes(" hover_on_board_element")) {
						setClassname(classname + " hover_on_board_element");
					}
				}}
				onMouseLeave={() => {
					let string = classname.split(" ");
					string.pop();
					setClassname(string.join(" "));
				}}
			>
				<h1>{array[props.id]}</h1>
			</div>
		</>
	);
};

export default BoardElement;
