import React from "react";
import axios from "axios";

export default class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleEdit(event) {
    axios
      .post(
        "http://localhost:8080/api/note/edit/" + this.props.match.params.id,
        {
          text: this.state.text,
          title: this.state.title,
        }
      )
      .then(() => {
        console.log("Note has been edited");
      })
      .catch(() => {
        console.log("Error occured while saving edits");
      });
  }

  handleDelete(event) {
    axios
      .delete(
        "http://localhost:8080/api/note/delete/" + this.props.match.params.id
      )
      .then(() => {
        console.log("Note has been deleted");
        alert("Note deleted, Save to undo");
      })
      .catch(() => {
        console.log("Error occured while deleting");
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/note/fetch/" + this.props.match.params.id)
      .then((res) => {
        console.log("Note succesfully Fetchd");
        this.setState({
          title: res.data.title,
          text: res.data.text,
        });
      })
      .catch(() => {
        console.log("Error ocured while fetching note");
      });
  }

  render() {
    return (
      <div className="container">
        <input
          value={this.state.title}
          className="form-title"
          onChange={this.handleTitle}
        />
        <textarea
          value={this.state.text}
          className="form-text"
          onChange={this.handleText}
        />
        <button className="btn btn-success" onClick={this.handleEdit}>
          Save
        </button>
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}
