import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/style/TaskDashboard.css";
import TaskCards from "../components/TaskCards";
import AddTask from "../components/AddTask";

const TaskDashboard = () => {
  const [todos, setTodos] = useState([]);

  const urlAPI = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios({
      method: "GET",
      url: urlAPI,
    }).then((res) => {
      setTodos(res.data.slice(0, 5));
    });
  }, []);

  const handleAddTodo = (data) => {
    setTodos([data, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  return (
    <section className="sign">
      <div className="container dashboard">
        <div className="task-header">
          <h2>Todos</h2>
          <h2>Sign Out</h2>
        </div>
        <div className="task-wrapper">
          <div className="left-side">
            <div className="user-profile">
              <div className="user-img">
                <div className="img-box"></div>
              </div>
              <div className="user-name">
                <strong>Profile Name</strong>
              </div>
            </div>
            <div>
              <p className="sort-by">My Day</p>
              <p className="sort-by">Important</p>
              <p className="sort-by">Completed</p>
            </div>
          </div>
          <div className="right-side">
            <AddTask AddTodo={handleAddTodo} todos={todos} />
            <div className="task-list">
              <TaskCards todos={todos} DelTodo={handleDeleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDashboard;
