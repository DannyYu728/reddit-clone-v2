import "./Overview.css";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate, Link } from "react-router-dom";

function Overview({ toggle, theme }) {
  const { user } = useAuthContext();

  function prettyDate2(time) {
    let date = new Date(time);
    let cake = date.toLocaleDateString();
    return cake;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let file = e.target.uploadFile.files[0];
    //   let formData = new FormData();
    //   formData.append("file", file);
    //   const res = await updateProfile(formData);
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  if (!user) return <h1>YOU GOT TO JOIN THE CREW FIRST</h1>;

  return (
    <div className="overview">
      <div
        className={`overview-container ${theme}`}
        style={{
          width: toggle === "Overview" ? "100%" : "50%",
        }}
      >
        <img src={!user.banner ? "https://dy-reddit-v2.up.railway.app/static/banner.jpg" : user.banner} alt="Banner" className="banner" />
        <div className="overview-center">
          <div className="overview-center-left">
            <img src={!user.avatar ? "https://dy-reddit-v2.up.railway.app/static/default.png" : user.banner} alt="user avatar" className="avatar" />
            {user.username.toUpperCase()}
            <div className="overview-left-btn-container">
              <div className="profileBtn">Avatar</div>
              <Link to="/changepassword/">
                <div className="profileBtn">Password </div>
              </Link>
            </div>
          </div>
          <div className="new-post">
            <Link to="/create-post">
              <div className="post-button">Bake It</div>
            </Link>
          </div>
          <div className="overview-center-right">
            <p className="overview-tag">Bakes</p>
            <p className="tag-details">9001 Like</p>
            <p className="overview-tag">Bread Day</p>
            <p className="tag-details">{prettyDate2(user.date_joined)}</p>
          </div>
        </div>
      </div>
      <div className="breader-container">
        <div className="box-canvas">
          <div className="bread">
            <div className="bread-top"></div>
            <div className="bread-inner"></div>
          </div>
          <div className="breader">
            <div className="breaderName"> Breddit </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
