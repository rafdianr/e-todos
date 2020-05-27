import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      userId: 1,
      id: props.todos.length + 1,
      title: newTask,
      completed: false,
    };

    props.AddTodo(newData);
  };

  const change = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form className="add-task" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add task ..."
        value={newTask}
        onChange={change}
      />
      <button className="add-icon">
        <i className="fab" alt="facebook">
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
    </form>
  );
};

export default AddTask;
