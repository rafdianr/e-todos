import React from "react";
import "../assets/style/TaskDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faStar,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

function TaskCards() {
  return (
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
  );
}

export default TaskCards;
