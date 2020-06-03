import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/style/TaskDashboard.css";
import TaskCards from "../components/TaskCards";
import AddTask from "../components/AddTask";

const TaskDashboard = (props) => {
  const [todos, setTodos] = useState([]);
  const [userName, setUserName] = useState(null);
  const [userImg, setUserImg] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      props.history.replace("/signin");
    }
  });

  useEffect(() => {
    //GET PROFILE
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoading(true);
      axios({
        method: "GET",
        url: "https://mini-project1.herokuapp.com/api/v1/user/profile",
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          if (res.data.status) {
            setUserName(res.data.data.owner.name);
            setUserImg(res.data.data.owner.image);
            setUserId(res.data.data.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    //GET TASK
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "GET",
        url: "https://mini-project1.herokuapp.com/api/v1/tasks?page=1&limit=10",
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log("getTodo", userId, res);
          if (res.data.status) {
            setTodos(res.data.data.filter((item) => item.author.id === userId));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  // const handleAddTodo = (data) => {
  //   setTodos([data, ...todos]);
  // };

  const getTodo = () => {
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "GET",
        url: "https://mini-project1.herokuapp.com/api/v1/tasks?page=1&limit=10",
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log("getTodo", userId, res);
          if (res.data.status) {
            console.log("dari fungsi get todo", res);
            const newData = res.data.data.filter(
              (item) => item.author.id === userId
            );
            console.log(newData);
            setTodos(newData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteTodo = (id) => {
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "DELETE",
        url: `https://mini-project1.herokuapp.com/api/v1/tasks/${id}`,
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            setTodos([...todos.filter((item) => item.id !== id)]);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  };

  const handleTaskImportance = (id) => {
    console.log("change importance");
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "PUT",
        url: `https://mini-project1.herokuapp.com/api/v1/tasks/toogle-importance/${id}`,
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            let tempTodos = todos.map((todo) => ({ ...todo }));
            const impTodo = tempTodos.find((item) => item.id === id);
            impTodo.importance = !impTodo.importance;
            setTodos(tempTodos);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
    // let tempTodos = todos.map((todo) => ({ ...todo }));
    // const impTodo = tempTodos.find((item) => item.id === id);
    // impTodo.importance = !impTodo.importance;
    // setTodos(tempTodos);
  };

  const handleTaskCompletion = (id) => {
    console.log("change completion");
    let token = localStorage.getItem("token");
    if (token) {
      axios({
        method: "PUT",
        url: `https://mini-project1.herokuapp.com/api/v1/tasks/toogle-completion/${id}`,
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            let tempTodos = todos.map((todo) => ({ ...todo }));
            const comTodo = tempTodos.find((item) => item.id === id);
            comTodo.completion = !comTodo.completion;
            setTodos(tempTodos);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
    // let tempTodos = todos.map((todo) => ({ ...todo }));
    // const comTodo = tempTodos.find((item) => item.id === id);
    // comTodo.completion = !comTodo.completion;
    // setTodos(tempTodos);
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
                <div className="img-box">
                  <img className="img" src={userImg} alt="" />
                </div>
              </div>
              <div className="user-name">
                <strong>{isLoading ? "Profile Name" : `${userName}`}</strong>
              </div>
            </div>
            <div>
              <p className="sort-by">My Day</p>
              <p className="sort-by">Important</p>
              <p className="sort-by">Completed</p>
            </div>
          </div>
          <div className="right-side">
            <AddTask GetTodo={getTodo} todos={todos} />
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
