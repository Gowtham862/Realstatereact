import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [error, seterror] = useState();
  const [loading,isloading]=useState(false);
  const navigate = useNavigate();
  const handlesubmit = async (e:any) => {
    e.preventDefault();
   
    const formdata = new FormData(e.target);
    const username = formdata.get("username");

    const password = formdata.get("password");
    console.log(username);

    try {
   
         isloading(true); 
        const res = await axios.post(
          "http://localhost:8800/api/lo/loginu",
          {
            username,
            password,
          }
        );
        navigate("/listpage")
    
    
    } catch (err) {
      console.log(err);
      let result=alert("error message"+err);
      // seterror(err?.response?.data?.message);
    }
    finally{
     isloading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={loading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account? Register</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="./realstateimage.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
