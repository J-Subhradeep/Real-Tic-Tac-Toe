import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArray } from "./GameSlice";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
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
				<h1 className="boardSigns">{array[props.id]=="X"?<ClearOutlinedIcon style={{
					fontSize:"4rem"
				}}/>:""}{array[props.id]=="O"?<CircleOutlinedIcon
				style={{
					fontSize:"4rem"
				}}/>:""}</h1>
				
			</div>
		</>
	);
};

export default BoardElement;
