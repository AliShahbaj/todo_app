import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
    className={`flex justify-between items-center p-2 border rounded-lg ${
      todo.completed ? "bg-gray-200 line-through text-gray-500" : "bg-white"
    }`}
    >
      <span 
      className="cursor-pointer flex-1 text-lg"
      onClick={() => toggleTodo(todo.id)}>{todo.todo}</span>
      <button 
      className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
      onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
