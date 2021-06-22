import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Router, Route } from "react-router-dom";

import TaskList from "./components/task.component";
import Navigation from "./components/nav.component";

function App() {
  return (
    <div className="w-100 h-100">
      <Navigation />
      <TaskList />
    </div>
  );
}

export default App;
