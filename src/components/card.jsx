import "./card.css";

const card = (props) => {
  return (
    <div className="card">
      <img
        src={props.pictureURL}
        alt={props.Username}
        className="profile-img"
      />

      <h2 className="username">{props.Username || "Username"}</h2>
      <p className="email">{props.Email || "Email"}</p>

      <p className="info">{props.information || "Information"}</p>

      <button className="btn" onClick={() => props.deletehandler(props.index)}>
        Delete Profile
      </button>
    </div>
  );
};

export default card;
