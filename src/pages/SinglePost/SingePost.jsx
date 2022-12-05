import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentContainer from "../../components/CommentContainer/CommentContainer.jsx";
import { getComments } from "../../services/Comment.js";
import { getPost, deletePost, updatePost } from "../../services/Posts.js";
import "./SinglePost.css";
import TextEditor from "../../components/TextEditor/TextEditor.jsx";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import PostContainer from "../../components/PostContainer/PostContainer.jsx";

function Post() {
  const { user } = useAuthContext();
  const titleRef = useRef();
  const bodyRef = useRef();
  const [sToggle, setSToggle] = useState(false);
  const [eToggle, setEToggle] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const filtered = comments.filter((comment) => comment.post == params.id);

  const showSpread = () => {
    if (!sToggle) return setSToggle(true);
    return setSToggle(false);
  };

  const showEdit = () => {
    if (!eToggle) return setEToggle(true);
    return setEToggle(false);
  };

  const deleteStuff = async () => {
    const res = await deletePost(params.id);
    console.log(res);
    navigate(`/posts/all`, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        owner: user.id,
        title: titleRef.current.value,
        body: bodyRef.current.value,
      };
      const post = await updatePost(params.id, form);
      if (post.name === "AxiosError") {
        alert("You can't touch this");
      } else {
        const id = post.id;
        navigate(`/post/${id}`, { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async () => {
    const res = await getComments();
    setComments(res);
  };

  const fetchPost = async () => {
      const res = await getPost(params.id);
      setPost(res);
    } 

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [location]);
  
  if (!post) return <h1>Loading...</h1>;
  if (!comments) return <h1>Loading...</h1>;

  return (
    <div className="post-center">
      <div className="single-post-container">
        <center>
          <PostContainer post={post} />

          {user && <div className="buttonsMore">
            <button onClick={showSpread} id="comment-button">
              Spread It
            </button>
            {user && user.username === post.owner && (
              <div>
                <button id="edit-button" onClick={showEdit}>
                  ReBake It
                </button>
                <button id="delete-button" onClick={deleteStuff}>
                  Dee Eats It
                </button>
              </div>
            )}
          </div>}
          {sToggle && (
            <div>
              <TextEditor />
            </div>
          )}
          {eToggle && (
            <form onSubmit={handleSubmit} className="post-details">
              <div className="input-flex">
                <input
                  type="text"
                  id="post-title"
                  placeholder="Title"
                  name="title"
                  ref={titleRef}
                />
                <textarea
                  type="text"
                  id="post-text"
                  placeholder="Spread your thoughts..."
                  name="body"
                  ref={bodyRef}
                />
              </div>
              <hr id="line"></hr>
              <div className="post-button-flex">
                <button type="submit" id="post-button">
                  Rebake It
                </button>
              </div>
            </form>
          )}
        </center>
        <center>
          <div className="comment-container">
            {filtered.map((comment, index) => {
              return <CommentContainer comment={comment} key={index} />;
            })}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Post;

