import React from 'react';

function Footer({ todos }) {
  const completedTasks = todos.filter(task => task.completed).length;
  const totalTasks = todos.length;

  return (
    <footer className="bg-green-500 text-white p-4">
      <div className="text-center">
        <p className="text-lg">
          {completedTasks} / {totalTasks} tasks completed
        </p>
      </div>
    </footer>
  );
}

export default Footer;
