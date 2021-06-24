import React from "react";
import { Link } from "react-router-dom";

import Logo from "../tonotelogo.png";

export default function Navigation() {
  return (
    <div className="bg-dark w-100 sticky-top">
      <div className="container-fluid">
        <Link className="float-start text-light text-decoration-none" to="/">
          <img src={Logo} height="45px" />
        </Link>
        <div className="text-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#taskList"
            aria-expanded="false"
            aria-controls="taskList"
          >
            <i className="bi bi-list-task"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
