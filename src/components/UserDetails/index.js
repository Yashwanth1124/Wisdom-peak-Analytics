import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-detail-container">
      <h1 className="user-detail-title">User Details</h1>
      <div className="user-detail-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
      <button onClick={() => navigate('/')} className="back-button">
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
