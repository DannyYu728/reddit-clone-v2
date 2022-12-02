import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { createPost } from "../../services/Posts.js";
import { useAuthContext } from "../../hooks/useAuthContext";
import categoryOptions from "../../assets/categories";

function CreatePost() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const linkRef = useRef();
  const categoryRef = useRef();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login", { replace: true });
    }
    try {
      const form = {
        owner: user.id,
        title: titleRef.current.value,
        body: bodyRef.current.value,
        link: !linkRef.current.value
          ? "https://freshlybakedcompany.com/"
          : linkRef.current.value,
        category: !categoryRef.current.value
          ? "bakery"
          : categoryRef.current.value,
      };
      const post = await createPost(form);
      const id = post.id;
      navigate(`/post/${id}`, { state: post });
    } catch (error) {
      console.error(error);
    }
  };

  // if (!user) return <h1>Loading...</h1>;

  return (
    <div className="entire-page">
      <div className="create-post-container">
        <h3 className="create-a-post">Bake Some Goods</h3>
        <hr id="line"></hr>
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
            <input
              type="url"
              id="post-link"
              placeholder="Link (optional)"
              name="link"
              ref={linkRef}
            />
            <select
              name="category"
              className="select"
              ref={categoryRef}
              id="post-category"
              placeholder="Category (optional)"
            >
              {categoryOptions.map((option, index) => {
                return (
                  <option value={option.category} key={index}>
                    {option.title}
                  </option>
                );
              })}
            </select>
          </div>
          <hr id="line"></hr>
          <div className="post-button-flex">
            <button type="submit" id="post-button">
              Fresh Bake
            </button>
          </div>
        </form>
      </div>

      <div className="rules-container">
        <h5 className="posting-to-breddit">Posting to Breddit</h5>
        <ol className="rules-list">
          <li id="list">ASSEMBLE BREAD INGREDIENTS</li>
          <li id="list">DISSOLVE THE YEAST AND ACTIVATE IT BY PROOFING</li>
          <li id="list">ADD REMAINING INGREDIENTS AND MIX</li>
          <li id="list">KNEAD THE BREAD</li>
          <li id="list">FIRST RISE</li>
          <li id="list">PUNCH DOUGH AND SHAPE IT</li>
          <li id="list">SECOND RISE</li>
          <li id="list">BAKE THE BREAD</li>
          <li id="list">COOL THE BREAD</li>
          <li id="list">SHARE THE BREAD</li>
        </ol>
        <div className="etiquitte">
          Please be mindful of breddit's content policy and practice good
          breddiquette.
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
