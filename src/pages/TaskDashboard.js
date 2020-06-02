import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../assets/style/TaskDashboard.css";
import TaskCards from "../components/TaskCards";
import AddTask from "../components/AddTask";

const TaskDashboard = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      props.history.replace("/signin");
    }
  });

  const handleAddTodo = (data) => {
    setTodos([data, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  const handleTaskImportance = (id) => {
    console.log("change importance");
    let tempTodos = todos.map((todo) => ({ ...todo }));
    const impTodo = tempTodos.find((item) => item.id === id);
    impTodo.importance = !impTodo.importance;
    setTodos(tempTodos);
  };

  const handleTaskCompletion = (id) => {
    console.log("change completion");
    let tempTodos = todos.map((todo) => ({ ...todo }));
    const comTodo = tempTodos.find((item) => item.id === id);
    comTodo.completion = !comTodo.completion;
    setTodos(tempTodos);
  };

  const handleLogout = () => {
    console.log("logout nih");
    localStorage.removeItem("token");
    props.history.replace("/signin");
  };

  return (
    <section className="sign">
      <div className="container dashboard">
        <div className="task-header">
          <h2>Todos</h2>
          <h2 className="logout" onClick={handleLogout}>
            Sign Out
          </h2>
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
              {todos.length ? (
                <TaskCards
                  todos={todos}
                  DelTodo={handleDeleteTodo}
                  ImpTodo={handleTaskImportance}
                  ComTodo={handleTaskCompletion}
                />
              ) : (
                <div className="no-task">Nothing you want to do yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDashboard;
