import "./Overview.css";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { updateProfile } from "../../../services/user";

function Overview({ toggle, theme }) {
  const { user } = useAuthContext();

  function prettyDate2(time) {
    let date = new Date(time);
    let cake = date.toLocaleDateString();
    return cake;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let file = e.target.uploadFile.files[0];
      let formData = new FormData();
      formData.append("file", file);
      const res = await updateProfile(formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
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
        <img src={user.banner} alt={`user-banner`} className="banner" />
        <div className="overview-center">
          <div className="overview-center-left">
            <img src={user.avatar} alt="user avatar" className="avatar" />
            {user.username.toUpperCase()}
            <div className="overview-left-btn-container">
              <div className="profileBtn">Banner</div>
              <div className="profileBtn"> Avatar </div>
              {/* <form onSubmit={handleSubmit}>
                <input type="file" id="myfile" name="uploadFile"></input>
                <button className="signup-submit" type="submit">
                  UPDATE
                </button>
              </form> */}
            </div>
          </div>
          <div className="new-post">
          <div className="post-button">Bake It</div>
        </div>
          <div className="overview-center-right">
            <p className="overview-tag">Bakes</p>
            <p className="tag-details">9001 Like</p>
            <p className="overview-tag">Bread Day</p>
            <p className="tag-details">{prettyDate2(user.date_joined)}</p>
            {/* <button className="social-button">+ Add Social Link</button>  */}
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
