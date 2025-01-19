import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('light'); 
  const usersPerPage = 5;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z');
    setUsers((prevUsers) => {
      return [...prevUsers].sort((a, b) => {
        if (sortOrder === 'A-Z') {
          return b.name.localeCompare(a.name);
        }
        return a.name.localeCompare(b.name);
      });
    });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">User List</h1>
      <div className="home-controls">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <button onClick={handleSort} className="sort-button">
          Sort {sortOrder}
        </button>
        <button onClick={handleThemeToggle} className="theme-toggle-button">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      </div>
      <ul className="user-list">
        {currentUsers.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-link">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${
              currentPage === index + 1 ? 'active' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
