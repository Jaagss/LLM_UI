import React, { useState } from 'react';
import './App.css';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="header">
      <div className="header-title">VivaBot</div>
      <img
        className="profile-pic"
        src="plus.png"
        alt="Profile Picture"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {showDropdown && (
        <div className="dropdown">
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Log Out</a>
        </div>
      )}
    </div>
  );
}

function AssignmentCard({ title, number, href }) {
  return (
    <a href={href} className="assignment-card">  {}
      <div className="card-title">{title}</div>
      <div className="card-number">Assignment {number}</div>
    </a>
  );
}

function AddAssignmentButton() {
  return (
    <div className="add-assignment-button">
      +
    </div>
  );
}

function App() {
  const assignments = [
    { title: 'Operating Systems', number: 1, href: "#" },
    { title: 'Operating Systems', number: 2, href: "#" },
    { title: 'Advanced Programming', number: 3, href: "#" },
    { title: 'Advanced Programming', number: 1, href: "#" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="assignment-container">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.number} {...assignment} />
        ))}
      </div>
      <AddAssignmentButton />
    </div>
  );
}

export default App;
