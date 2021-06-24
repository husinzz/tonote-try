import axios from "axios";
import React, { useState, useEffect } from "react";
import { Router, Link } from "react-router-dom";

function NoteBox(props) {
  const [title, changeTitle] = useState(props.title);
  const [text, changeText] = useState(props.text);

  return (
    <Link to={"/note/" + props.id} className="note-block">
      <h3 className="note-box_title">{title}</h3>
      <p className="note-box_text">{text}</p>
    </Link>
  );
}

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/note/show")
      .then((res) => {
        this.setState({
          notes: res.data,
        });
        console.log("NoteBlock succsesfully fetched");
      })
      .catch(() => {
        console.log("Error while fetching note blocks");
      });
  }

  render() {
    return this.state.notes.map((current) => {
      return (
        <NoteBox
          title={current.title}
          text={current.text}
          id={current._id}
          key={current._id}
        />
      );
    });
  }
}
