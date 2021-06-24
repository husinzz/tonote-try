import "./component-styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const URI = "http://localhost:8080/api/todo/";

// Add a a way for me to add tasks from the app note from insomnia

function Task(props) {
  const [state, changeState] = useState(props.state);
  const [title, changeTitle] = useState(props.title);

  return (
    <div
      className="w-100"
      onClick={() => {
        axios
          .post(URI + "edit/" + props.id, { title: props.title, state: !state })
          .then((res) => {
            changeState(!state);
            console.log("Task value changed succesfully");
          })
          .catch((res) => {
            console.log("An error occured when changing task value");
          });
      }}
    >
      <p className={state ? "task_completed" : ""}>{title}</p>
    </div>
  );
}

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      collapsed: true,
    };
  }

  componentDidMount() {
    axios
      .get(URI + "show")
      .then((res) => {
        this.setState({
          tasks: res.data,
        });
        console.log("Task succesfully fetched");
      })
      .catch(() => {
        console.log("Error occured while fething Tasks");
      });
  }

  render() {
    return (
      <div id="taskList" className="taskList p-3 collapse">
        <div className="d-flex">
          <h3 className="w-100">Todo List</h3>
        </div>
        <hr />
        {this.state.tasks.map((current) => {
          return (
            <div className="d-flex px-1">
              <Task
                title={current.title}
                state={current.state}
                id={current._id}
                key={current._id}
              />
              <div
                className="flex-shrink-1 px-1"
                onClick={() => {
                  axios
                    .delete(URI + "delete/" + current._id)
                    .then(() => {
                      this.setState({
                        tasks: this.state.tasks.filter(
                          (el) => el._id !== current._id
                        ),
                      });
                      console.log("Deleting task succesfully");
                    })
                    .catch(() => {
                      console.log("Error occured while deleting task");
                    });
                }}
              >
                <i className="bi bi-x-circle-fill "></i>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
