import React from "react";
import Fab from "@mui/material/Fab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Volume from "./Volume";
const Result = () => {
  return (
    <>
      <div className="ownProfile">
        <Fab>
        <AccountCircleIcon fontSize="large" style={
            {
                color: "#3B3B98"
            }
        }/>
        </Fab>
        <h2>You</h2>
      </div>
      <div className="volumeBar">
        <Volume />
      </div>
      <div className="bothPlayer" style={{backgroundColor:"primary" }} >
        <p className="room">Room</p>
        <p className="roomcode">adi8u39</p>
        <div className="players">
          <div className="player1">
            <Fab>
            <AccountCircleIcon fontSize="large" />
            </Fab>
            <p>You</p>
          </div>
          <p className="vs">Vs</p>
          <div className="player2">
            <Fab>
              <AccountCircleIcon fontSize="large" />
            </Fab>
            <p>Opponent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
