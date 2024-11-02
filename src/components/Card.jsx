import "./Card.css";

export default function Card({ empName, role, email, image }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-info">
        <h3>{empName}</h3>
        <p>{role}</p>
        <br />
        <p>{email}</p>
        <br />
        <br />
        <div className="card-btns">
          <button className="block">Block</button>
          <button className="details">Details</button>
        </div>
      </div>
    </div>
  );
}
