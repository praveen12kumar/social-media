import {useContext} from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/homePage/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";
import AllPosts from "./pages/allPosts/AllPosts";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ProfilePage from "./pages/profile/ProfilePage";
import IndividualUser from "./pages/individualUsers/IndividualUser";
import PostPage from "./pages/singlePostPage/PostPage";
//import RequireAuth from "./requiresAuth/RequiresAuth";

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <People/> */}

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/explore" element={<AllPosts/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="post/:post_id" element={<PostPage/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/user/:user_id" element={<IndividualUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
