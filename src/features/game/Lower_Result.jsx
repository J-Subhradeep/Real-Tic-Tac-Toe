import React from "react";
import Volume from "./Volume";
const Lower_Result = () => {
  return (
    <div className="low_div">
      <div className="player12">
        <div className="rooms">
          <p className="room_low_div">Room: </p>
          <p className="roomcode_low_div">adi8u39</p>
        </div>
        <div className="meVsOpponent">
          <p className="me">You</p>
          <p className="Vs">Vs</p>
          <p className="opponent">Opponent</p>
        </div>
      </div>
      <div className="volumeBar_low_div">
        <Volume />
      </div>
    </div>
  );
};

export default Lower_Result;
