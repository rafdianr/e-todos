import React from "react";
import "../assets/style/TaskDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSquare,
  faStar,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className="task-lists">
              <div className="task-card">
                <div className="task-icon check">
                  <FontAwesomeIcon icon={faSquare} />
                </div>
                <p className="task-des">Test 1 2 3</p>
                <div className="task-icon important">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="task-icon edit">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </div>
                <div className="task-icon del">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskDashboard;
