import './profilepage.scss'

import List from "../list/list";
import Chat from '../chat/chat';


function Profilepage() {
  return (
    <div className="profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="tittle">
            <h1>user Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar:
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </span>
            <span>Username: <b>Gowtham</b></span>
            <span>Email : <b>Gowthamk712812@gamil.com</b></span>
          </div>
          <div className="tittle">
            <h3>My List</h3>
            <button>Create a new post</button>
          </div>
          <List/>
          <div className="tittle">
            <h6>Saved List</h6>
          </div>
        </div>
      </div>
      <div className="chatcontainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
