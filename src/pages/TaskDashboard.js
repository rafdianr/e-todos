import React from "react";
import "../assets/style/TaskDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TaskDashboard() {
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
            <p className="sort-by">My Day</p>
            <p className="sort-by">Important</p>
            <p className="sort-by">Completed</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskDashboard;
