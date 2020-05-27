import React, { useState, useEffect } from "react";
import "../assets/style/TaskDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskCards from "../components/TaskCards";

const TaskDashboard = () => {
  const [todos, setTodos] = useState([]);
  const urlAPI = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    axios({
      method: "GET",
      url: urlAPI,
    }).then((res) => {
      setTodos(res.data.slice(0, 10));
    });
  }, []);

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
            <div className="add-task">
              <input type="text" placeholder="add task ..." />
              <div className="add-icon">
                <i class="fab" alt="facebook">
                  <FontAwesomeIcon icon={faPlus} />
                </i>
              </div>
            </div>
            <div className="task-list">
              <TaskCards />
              <TaskCards />
              <TaskCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDashboard;
