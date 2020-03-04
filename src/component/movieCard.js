import React from "react";
import Etoiles from "./Etoiles";
import { connect } from "react-redux";
import { deleteMovie, editMovie } from "../actions/index";
import MovieModal from "../component/MovieModal";

class MovieCard extends React.Component {
  state = { show: false, isEdit: false };
  toggleModal = () => this.setState({ show: !this.state.show });

  render() {
    console.log("this.props", this.props);
    return (
      <div className="Cards">
        <div className="movieCard">
          <div className="rating-title">
            <p className="title">{this.props.movie.title}</p>
            <Etoiles etoile={this.props.movie.rating} />
          </div>
          <img
            src={this.props.movie.image}
            width="300px"
            height="300px"
            alt="film"
          />
          <p>{this.props.movie.year}</p>

          <button
            onClick={() => {
              this.toggleModal();
            }}
          >
            EDIT
          </button>
          {this.state.show && (
            <MovieModal
              show={this.state.show}
              toggleModal={this.toggleModal}
              movie={this.props.movie}
            />
          )}
          <button onClick={() => this.props.deleteMovie(this.props.movie.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: id => dispatch(deleteMovie(id)),
    editMovie: id => dispatch(editMovie(id))
  };
};
export default connect(null, mapDispatchToProps)(MovieCard);
