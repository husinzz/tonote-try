import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Router, Route } from "react-router-dom";

import TaskList from "./components/task.component";

function App() {
  return (
    <div className="w-100 h-100">
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#taskList"
        aria-expanded="false"
        aria-controls="taskList"
      >
        Button with data-bs-target
      </button>
      <TaskList />
    </div>
  );
}

export default App;
