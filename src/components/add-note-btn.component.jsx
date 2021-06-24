import React from "react";
import { Link } from "react-router-dom";

export default function AddBtn(props) {
  return (
    <Link to="/note/:id">
      <i className="bi bi-plus-circle-fill addBtn"></i>
    </Link>
  );
}
