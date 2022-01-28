import React from "react";
import messages from "./Messages";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useState } from "react";
const Game = () => {
  const [downarrow, setDownarrow] = useState(true);
  function getDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  return (
    <>
      <div className="fullres">
        <div>
          {/* <h1></h1>
          <h3></h3> */}
          <i onclick="location.reload()"></i>
        </div>
      </div>
      <div className="main">
        <div id="res" className="boxes">
          <div>
            <button id="pass" onclick="addpass()">
              win
            </button>
            <button id="fail" onclick="addfail()">
              loss
            </button>
          </div>
        </div>
        <div id="box" className="boxes">
          <div id="div1" className="posn top left">
            <h1>.</h1>
          </div>
          <div id="div2" className="posn top">
            <h1>.</h1>
          </div>
          <div id="div3" className="posn top right">
            <h1>O</h1>
          </div>
          <div id="div4" className="posn left">
            <h1>.</h1>
          </div>
          <div id="div5" className="posn">
            <h1>.</h1>
          </div>
          <div id="div6" className="posn right">
            <h1>X</h1>
          </div>
          <div id="div7" className="posn bot left">
            <h1>.</h1>
          </div>
          <div id="div8" className="posn bot">
            <h1>.</h1>
          </div>
          <div id="div9" className="posn bot right">
            <h1>.</h1>
          </div>
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
                  {/* <i
                id="scrollbot"
                className="fas fa-arrow-alt-circle-down fa-2x"
              ></i> */}
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
