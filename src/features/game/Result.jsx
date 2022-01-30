import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Fab from "@mui/material/Fab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Volume from "./Volume";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Result = () => {
  var username = localStorage.getItem("name");
  var room = localStorage.getItem("room");
  const [socketUrl, setSocketUrl] = useState(
    "ws://127.0.0.1:8000/ws/seconduser/" + room + "/" + username + "/"
  );

  const [icon, setIcon] = useState(false);
  const [opponent, setOpponent] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      var bothClient = JSON.parse(lastMessage.data);
      if (localStorage.getItem("name") === bothClient.first_client) {
        setOpponent(bothClient.second_client);
        setIcon(true);
        console.log(bothClient);
      }
      if (localStorage.getItem("name") === bothClient.second_client) {
        setOpponent(bothClient.first_client);
        setIcon(true);
      }
      if (bothClient.second_client == false) {
        setOpponent("Opps !");
        setIcon(false);
      }
    }
  }, [lastMessage, setMessageHistory]);
  return (
    <>
      <div className="ownProfile">
        <Fab>
          <AccountCircleIcon
            fontSize="large"
            style={{
              color: "#3B3B98",
            }}
          />
        </Fab>
        <h2>You</h2>
      </div>
      <div className="volumeBar">
        <Volume />
      </div>
      <div className="bothPlayer" style={{ backgroundColor: "primary" }}>
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
              {icon ? (
                <AccountCircleIcon fontSize="large" />
              ) : (
                <HelpOutlineIcon fontSize="large" color="error" />
              )}
            </Fab>
            <p>{opponent.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
