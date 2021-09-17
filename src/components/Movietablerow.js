import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class Movietablerow extends Component {
  constructor(props) {
    super(props);
    this.deletemovie = this.deletemovie.bind(this);
  }

  deletemovie() {
    axios
      .delete(
        "https://movierental111.herokuapp.com/movies/delete-movie" +
          this.props.obj._id
      )
      .then((res) => {
        console.log("movie successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.gener}</td>
        <td>{this.props.obj.dailyrental}</td>
        <td>{this.props.obj.noofcopies}</td>
        <td>
          <Link
            className="edit-link"
            to={
              "https://movierental111.herokuapp.com/movies/edit-movie/" +
              this.props.obj._id
            }
          >
            Edit
          </Link>
          <Button onClick={this.deletemovie} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
