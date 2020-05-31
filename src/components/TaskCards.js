import React from "react";
import "../assets/style/TaskDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faStar,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TaskCards = (props) => {
  const list = props.todos.map((item) => (
    <div className="task-card" key={item.id}>
      <div className="task-icon check">
        <FontAwesomeIcon icon={faSquare} />
      </div>
      <p className="task-des">{item.title}</p>
      <div className="task-icon important">
        <FontAwesomeIcon icon={faStar} onClick={() => props.ImpTodo(item.id)} />
      </div>
      <div className="task-icon edit">
        <FontAwesomeIcon icon={faPencilAlt} />
      </div>
      <div className="task-icon del" onClick={() => props.DelTodo(item.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  ));
  return <>{list}</>;
};

export default TaskCards;
