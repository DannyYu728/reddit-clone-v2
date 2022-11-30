import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./Posts.css";
import {getPosts} from "../../services/Posts.js";
import PostContainer from "../PostContainer/PostContainer";

function Post() {
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post, index) => {
        return <PostContainer post={post} key={index} />;
      })}
    </div>
  );
}

export default Post;
