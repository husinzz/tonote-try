import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import TaskList from "./components/task.component";
import Navigation from "./components/nav.component";
import NoteSingle from "./components/single-note.component";
import Home from "./components/home.component";

function App() {
  return (
    <div className="w-100 h-100">
      <Router>
        <Navigation />
        <TaskList />

        <Route path="/" exact component={Home} />
        <Route path="/note/:id" component={NoteSingle} />
      </Router>
    </div>
  );
}

export default App;
