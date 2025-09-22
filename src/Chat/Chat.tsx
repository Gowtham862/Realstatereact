import React, { useState } from "react";
import "./chat.scss";
function chat() {
    const [chat,setchat]=useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Gowtham</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Gowtham</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Gowtham</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Gowtham</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Gowtham</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
     {chat&& <div className="chatbox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            Gowtham
          </div>
          <span onClick={()=>setchat(false)}  className="close">X</span>
        </div>
        <div className="center">
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessages own">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>send</button>
        </div>
      </div>}
    </div>
  );
}

export default chat;
