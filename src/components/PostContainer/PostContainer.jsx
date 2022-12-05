import { useNavigate } from "react-router-dom";
import { likePost, unlikePost } from "../../services/Posts.js";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./PostContainer.css";
import toastie from "../../assets/9.png";

function PostContainer(props) {
  const { post } = props;
  const { user } = useAuthContext();

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, { state: post });
  };

  const unlike = () => {
    const res = unlikePost({ id: post.id });
    navigate(0)
  };

  const like = async () => {
    const res = await likePost({ id: post.id });
    navigate(0)
  };

  function prettyDate2(time) {
    let date = new Date(time);
    let cake = date.toLocaleDateString();
    return cake;
  }

  if (!post) return <h1>Loading...</h1>;
  if (!post.create_at) return <h1>Loading...</h1>;
  if (!post.likes) return <h1>Loading...</h1>;

  return (
    <div className="individual-post-container">
      <div className="vote-post-flexbox">
        {user && (
          <div className="vote-container">
            <button id="up-arrow" onClick={like}>
              <img src={toastie} className="toastie" />
            </button>
            <button id="up-arrow" onClick={unlike}>
              UNLIKE
            </button>
            {post.likes === undefined ? 0 : post.likes.length}
            <p className="give-bread">Bites</p>
          </div>
        )}

        <div
          className="post-info-container"
          onClick={() => handleClick(post.id)}
        >
          <p className="posted-by">
            <span id="category-name">b/{post.category}</span> • Baked by{" "}
            {post.owner}
            {prettyDate2(post.create_at)}
          </p>
          <h3 className="new-post-title">{post.title}</h3>
          <p className="new-post-body">{post.body}</p>
          <a href={post.link} target="_blank" className="post-link">
            {post.link}
          </a>
        </div>
      </div>
      <div className="view-comments-flexbox">
        <button className="view-comments" onClick={() => handleClick(post.id)}>
          View the Spread
        </button>
      </div>

      {/* <img src={post.link.thumbnail} /> */}
    </div>
  );
}

export default PostContainer;
