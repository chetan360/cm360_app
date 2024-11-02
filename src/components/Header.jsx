import { useState } from "react";
import "./Header.css";

export default function Header({ updateEmployees, employees }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredEmployees = employees.filter((emp) =>
      emp.name.toLowerCase().includes(input.toLowerCase())
    );
    updateEmployees(filteredEmployees);
  };

  return (
    <>
      <div className="header">
        <div className="searchbox">
          <form onSubmit={handleSubmit}>
            <i className="bi bi-search" onClick={handleSubmit}></i>
            <input
              type="text"
              placeholder="Search"
              onChange={handleInput}
              value={input}
            />
          </form>
        </div>
        <div className="profile">
          <img src="../public/4.jpg" alt="Profile" />
          <p>
            Alex Made <i className="bi bi-chevron-down"></i>
          </p>
        </div>
      </div>
      <div className="nav">
        <h2>Employees</h2>
        <div className="links">
          <a href="#" className="active">
            All
          </a>
          <a href="#" className="nav-link">
            Active
          </a>
          <a href="#" className="nav-link">
            Inactive
          </a>
        </div>
      </div>
    </>
  );
}
