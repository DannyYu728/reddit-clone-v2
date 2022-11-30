import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Post from "./components/Post/Post.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Profile from "./pages/User/Profile.jsx";
import UserTabs from "./pages/User/All-Tabs/UserTabs.jsx";
import User from "./pages/User/User.jsx"
import Chat from "./components/Chat/Chat.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import "./App.css";
import MiniChat from "./components/Chat/MiniChat.jsx";
import UserFavorites from "./pages/User/All-Tabs/userFavorites.jsx";
import UserPosts from "./pages/User/All-Tabs/UserPosts";
import UserComments from "./pages/User/All-Tabs/userComments";
import UserOverview from "./pages/User/All-Tabs/userOverview"

function App() {
  const [toggleChat, setToggleChat] = useState(true);
  const [showChat, setShowChat] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme}`}>
      <NavBar
        setShowChat={setShowChat}
        expanded={expanded}
        setExpanded={setExpanded}
        theme={theme}
        setTheme={setTheme}
      />
      <Aside theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/Profile" element={<Profile />} />
        <Route path="/user-feed/overview" element={<UserOverview />} />
        <Route path="/user-feed/posts" element={<UserPosts />} />
        <Route path="/user-feed/comments" element={<UserComments/>} />
        <Route path="/user-feed/userFavorites" element={<UserFavorites />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/user" element={<User />} />
      </Routes>
      {showChat &&
        (toggleChat ? (
          <MiniChat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ) : (
          <Chat setToggleChat={setToggleChat} setShowChat={setShowChat} />
        ))}
    </div>
  )
}

export default App