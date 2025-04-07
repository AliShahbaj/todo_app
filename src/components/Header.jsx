import React from 'react';

function Header({ setDarkMode, darkMode, setFilter }) {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <div className="flex items-center space-x-4">
          {/* Filter Dropdown */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="all"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
