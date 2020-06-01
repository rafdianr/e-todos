import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/style/TaskDashboard.css";
import TaskCards from "../components/TaskCards";
import AddTask from "../components/AddTask";

const TaskDashboard = () => {
  const [todos, setTodos] = useState([]);

  // const urlAPI = "https://jsonplaceholder.typicode.com/todos";

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: urlAPI,
  //   }).then((res) => {
  //     setTodos(res.data.slice(0, 6));
  //   });
  // }, []);

  const handleAddTodo = (data) => {
    setTodos([data, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  const handleTaskImportance = (id) => {
    // console.log("change importance");
    // const tempTodos = todos.find((item) => item.id === id);
    // console.log("before change", tempTodos);
    // tempTodos.importance = !tempTodos.importance;
    // console.log("after change", tempTodos);

    // Copy the state first using the spread operator
    // Since you are using array as your todo, we have to clone the array (with map) and the object inside it (with ...)
    let tempTodos = todos.map((todo) => ({ ...todo }));
    // Find the todo based on the id
    const impTodo = tempTodos.find((item) => item.id === id);
    // In here we are changing the copy of the todos, so we are not messing with the current todos state
    impTodo.importance = !impTodo.importance;
    // Then we replace the current state with the tempTodos
    setTodos(tempTodos);
  };

  const handleTaskCompleted = (id) => {
    console.log("change ");
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
              {todos.length ? (
                <TaskCards
                  todos={todos}
                  DelTodo={handleDeleteTodo}
                  ImpTodo={handleTaskImportance}
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
