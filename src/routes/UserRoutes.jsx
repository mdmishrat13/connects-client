import Feeds from "../pages/UserPages/Feeds";
import Profile from "../pages/UserPages/Profile";
import Content from "../pages/UserPages/dashboard/Content";

const UserRoutes = [
    {
    index: true,
      element: <Feeds/>,
    },
    {
      path:"feeds",
      element: <Feeds/>,
    },
    {
      path: "dashboard",
      element:<Content/>,
    //   children: [
    //     {
    //       index: true,
    //       element: <DashboardMain/>,
    //     },
    //     {
    //       path:'articles',
    //       element: <Articles/>,
    //     },
    //     {
    //       path:'create-post',
    //       element: <CreatePost/>,
    //     },
    //     {
    //       path:'edit-post/:id',
    //       element: <EditPost/>,
    //     },
    //     {
    //       path: 'analytics',
    //       element: <h1>analytics content will be there</h1>,
    //     },
    //     {
    //       path:'settings',
    //       element:<Settings/>,
    //       children:[{
    //         index:true,
    //         element:<ProfilePicture/>
    //       },
    //     {
    //       path:'edit-name',
    //       element:<ChangeName/>
    //     },
    //     {
    //       path:'change-password',
    //       element:<EditPassword/>
    //     },
    //   ]
//     }
// ]
},
    {
      path: "profile",
      element: <Profile/>,
    },
    {
      path: "profile/:id",
      element: <h1>public profile</h1>,
    },
    {
      path: "feeds",
      element:<h1>feed</h1>,
    },
  
    {
      path: "my-posts",
      element: <h1> my post will be there </h1>,
    },
    {
      path: "writters",
      element:<h1>all writters will be there</h1>,
    },
  ];
  
  export default UserRoutes;