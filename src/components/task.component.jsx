import "./component-styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const URI = "http://localhost:8080/api/todo/";

function Task(props) {
  const [state, changeState] = useState(props.state);

  useEffect(() => {
    const task = {
      title: props.title,
      state: state,
    };

    axios
      .post(URI + "edit/" + props.id, task)
      .then((res) => {
        console.log("Task value changed succesfully");
      })
      .catch((res) => {
        console.log("An error occured when changing task value");
      });
  });

  return (
    <div>
      <div
        onClick={() => {
          changeState(!state);
        }}
      >
        <p className={state ? "task_completed" : ""}>{props.title}</p>
      </div>
    </div>
  );
}

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
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
      <div>
        {this.state.tasks.map((current) => {
          return (
            <Task
              title={current.title}
              state={current.state}
              id={current._id}
              key={current._id}
            />
          );
        })}
      </div>
    );
  }
}
