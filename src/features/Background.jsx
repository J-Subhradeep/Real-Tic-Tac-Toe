import React, { useEffect } from "react";
import backgroundmusic from "./Sounds/music.mp3";
import { Howl, Howler } from "howler";
const Background = () => {
	var sound = new Howl({
		src: [backgroundmusic],
	});
	useEffect(() => {
		sound.play();
		Howler.volume(0.05);
	}, []);

	function some() {
		console.log(backgroundmusic);

		Howler.volume(0.5);
	}
	function stop() {
		sound.stop();
	}
	return <></>;
};

export default Background;
