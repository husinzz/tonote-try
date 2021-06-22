import React from "react";
import Logo from "../tonotelogo.png";

export default function Navigation() {
  return (
    <div className="bg-dark w-100">
      <div className="container-fluid">
        <a className="float-start text-light text-decoration-none" href="#">
          <img src={Logo} height="45px" />
        </a>
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
