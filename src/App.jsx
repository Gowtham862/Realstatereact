
import "./layout.scss";

import Home from "./Homepage/Home";
import Listpage from "./listpage/Listpage";
import Singlepage from "./Singlepage/Singlepage";
import Layout from "./layout/Layout";
import Loginpage from "./Loginpage/Loginpage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
}from "react-router-dom";
import Profilepage from "./Profilepage/Profilepage";
import Login from "./Login/Login";
import Register from "./register/Register";



function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/Homepage",
        element:<Home/>
      },{
        path:"/listpage",
        element:<Listpage/>
      },{
        path:"/Singlepage",
        element:<Singlepage/>
      },
      {
        path:"/Loginpage",
        element:<Loginpage/>
      },
      {
         path:"/Profilepage",
         element:<Profilepage/>
      },
      {
        path:"login",
        element:<Login/>
      },{
        path:"register",
        element:<Register/>
      }
    ]

  }
]);

  return (
  //   <div className="layout">
  //     <div className="navbar">
  //       <Navbars/>
  //     </div>
  //  <div className="content">
  // <Home/>
  //  </div>
  //   </div>
  <RouterProvider router={router}/> 
  )
}

export default App
