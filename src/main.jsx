import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Post from './Component/Posts/Posts';
import Comment from './Component/Comments/Comments';
import Albums from './Component/Albums/Albums';
import Photos from './Component/Photos/Photos';
import Todos from './Component/Todos/Todos';
import Users from './Component/Users/Users';
import PostDetails from './Component/Posts/PostDetails';
import CommentDetails from './Component/Comments/CommentDetails';
import AlbumDetails from './Component/Albums/AlbumDetails';
import PhotoDetails from './Component/Photos/PhotoDetails';
import TodoDetails from './Component/Todos/TodoDetails';
import UserDetails from './Component/Users/UserDetails'
import NotFound from './Component/NotFound/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<NotFound/>,
    children:[
      {
        path: "",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post/>
      },
      {
        path: "/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails/>
      },
      {
        path: "/comments",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comment/>
      },
      {
        path: "/comments/:commentId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails/>
      },
      {
        path: "/albums",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/albums'),
        element: <Albums/>
      },
      {
        path: "/albums/:albumId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),
        element: <AlbumDetails/>
      },
      {
        path: "/photos",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos/>
      },
      {
        path: "/photos/:photoId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
        element: <PhotoDetails/>
      },
      {
        path: "/todos",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/todos'),
        element: <Todos/>
      },
      {
        path: "/todos/:todoId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        element: <TodoDetails/>
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users/>
      },
      {
        path: "/users/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
