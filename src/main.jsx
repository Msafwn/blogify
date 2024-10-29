import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store.js";
import {createBrowserRouter  ,RouterProvider,} from 'react-router-dom'
import {Protection, Login} from './component/index.js'
import SignUp from "./component/pages/SignUp.jsx";
import AllPost from "./component/pages/AllPost.jsx";
import PostForm from "./component/pages/PostForm.jsx";
import Home from "./component/pages/Home.jsx";
import Eidit from "./component/pages/Eidit.jsx";
import Post from "./component/pages/post.jsx";
import ContactUs from "./component/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },{
        path: "/signIn",
        element: (
          <Protection authentication={false} childern={<Login/>}>
          </Protection>
        ),
      }
      ,{
        path: "/signUp",
        element: (
          <Protection authentication={false} childern={<SignUp/>}>
          </Protection>
        ),
      },{
        path: "/AllPosts",
        element: (
          <Protection authentication  childern={<AllPost/>}>
          {" "}
          </Protection>
        ),
      },{
        path: "/AddPosts",
        element: (
          <Protection authentication  childern={<PostForm/>}>
          {" "}
          </Protection>
        ),
      },{
        path: "//edit-post/:slug",
        element: (
          <Protection authentication  childern={<Eidit/>}>
          {" "}
          </Protection>
        ),
        
      },{
        path: "/post/:slug",
        element: <Post/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
    ]
  }
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path="/" element={<App/>}>
//     <Route path="/" element={<Home/>}/>
//     <Route path="signIn" element={<Protection authentication={false} childern={<Login/>} />}>
//       </Route>
//     <Route path="signUp" element={<Protection authentication={false} childern={<SignUp/>} />}/>

//     <Route path="AllPosts" element={<Protection authentication={true}  childern={<AllPost/>} />}/>
//     <Route path="AddPosts" element={<Protection authentication={true}  childern={<PostForm/>} />}/>

//     <Route path="/edit-post/:slug" element={<Protection authentication={true}  childern={<Eidit/>} />}/>
//     <Route path="/post/:slug" element={<Post/>}/>     
    
//     </Route>
//   )

// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
