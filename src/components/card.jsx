import "./card.css";

const card = (props) => {
  return (
    <div className="card">
      <img
        src={props.pictureURL}
        alt={props.Username}
        className="profile-img"
      />

      <h2 className="username">{props.Username}</h2>
      <p className="email">{props.Email}</p>

      <p className="info">{props.information}</p>

      <button className="btn" onClick={() => props.deletehandler(props.index)}>
        Delete Profile
      </button>
    </div>
  );
};

export default card;
