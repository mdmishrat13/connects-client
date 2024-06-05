import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../pages/Layouts/GuestLayout";
import UserLayout from "../pages/Layouts/UserLayout";
import GuestRoute from "../protected/GuestRoute";
import UserRoute from "../protected/UserRoute";
import GuestRoutes from "./GuestRoutes";
import UserRoutes from "./UserRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element:<GuestRoute><GuestLayout/></GuestRoute>,
      errorElement: <h1>Not found</h1>,
      children: GuestRoutes,
    },
    {
      path: "/user",
      element: <UserRoute><UserLayout /></UserRoute>,
      errorElement: <h1>Not found</h1>,
      children: UserRoutes,
    },
  ]);
  
  export default router;