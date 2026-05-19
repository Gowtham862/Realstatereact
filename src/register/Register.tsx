import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
    const [error,seteror]=useState<any>();
    
    const handlesubmit= async (e:any)=>{
        e.preventDefault();
  const formdata=new FormData(e.target);
  const username=formdata.get("username");
  const email=formdata.get("email");
  const password=formdata.get("password");
  console.log(username,email)

  try{

  if(username)
  {
const res=await axios.post("http://localhost:8800/api/auth/register",{
    username,email,password })
  }

  
 
  }
  catch(err){
    console.log(err);
    // seteror(err.response.data.message)

  }
    }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          {error&&<span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="./realstateimage.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;