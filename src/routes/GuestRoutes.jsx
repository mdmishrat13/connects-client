import Login from "../pages/GuestPages/Login";
import Register from "../pages/GuestPages/Register";

const GuestRoutes = [
    {
      index:true,
      element: <Login/>,
    },
    {
      path: "register",
      element: <Register/>,
    },
  ];
  
export default GuestRoutes;