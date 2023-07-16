import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Skills from "../Home/Home/Skills/Skills";
import Projects from "../Home/Home/Project/Projects";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/skills',
            element:<Skills></Skills>
        },
        {
          path:'projects',
          element:<Projects></Projects>
        }

      ]

    }
  ]);
  
  export default router;