import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddTask = (props) => {
  // const [newTask, setNewTask] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newData = {
  //     userId: 1,
  //     id: props.todos.length + 1,
  //     title: newTask,
  //     completion: false,
  //     importance: false,
  //   };
  //   props.AddTodo(newData);
  //   setNewTask("");
  // };

  const [description, setDescription] = useState("");
  const [name] = useState("Task Baru");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fungsi add data");
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "POST",
        url: "https://mini-project1.herokuapp.com/api/v1/tasks",
        headers: {
          authorization: token,
        },
        data: {
          name,
          description,
        },
      })
        .then((res) => {
          console.log(res);
          props.GetTodo();
          setDescription("");
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  };

  return (
    <form className="add-task" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add task ..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button className="add-icon">
        <i className="fab">
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
    </form>
  );
};

export default AddTask;
