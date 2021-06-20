import "./App.css";
import { Router, Route } from "react-router-dom";

import TaskList from "./components/task.component";

function App() {
  return (
    <div>
      <TaskList />
    </div>
  );
}

export default App;
