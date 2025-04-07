import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [darkMode, setDarkMode] = useState(false);

  const API_URL = "https://dummyjson.com/todos";
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL);
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);


  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTasks = todos.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <>
      <div className={darkMode ? 'app dark' : 'app'}>
        <Header
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          setFilter={setFilter}
        />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl text-center font-bold mb-4">To-Do List</h1>
          <TodoInput addTodo={addTodo} />
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            <TodoList todos={filteredTasks} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          )}
        </div>
        <Footer todos={todos} />
      </div>
    </>
  );
}

export default App;
