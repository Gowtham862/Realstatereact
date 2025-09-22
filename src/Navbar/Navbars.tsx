import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbars() {
    const [open,setopen]=useState(false);
    const user=true;
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="./realstate.png" alt="" />
          <span>Gowtham</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contacts</a>
        <a href="">Agends</a>
      </div>
      <div className="right">
        {user?(
    <div className="user">
      <img  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
      <span>Gowtham</span>
      <Link className="profile" to="/Profilepage">
      <div className="notification">3</div>
      <span className="profile">profile</span>
      </Link>
    </div>):(
          <>  
        <a href="">Signin</a>
        <a href="" className="register">Signup</a>
        </>
       )}
       <div className="menuicon">
        <img src="./menu.png" alt="" onClick={()=>setopen(!open)} />
        </div> 
        <div className={open ? "menu active":"menu"}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contacts</a>
        <a href="">Agends</a>
         <a href="">Signin</a>
        <a href="">Signup</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbars;
