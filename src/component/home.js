import React, { Component } from "react";
import Search from "../component/Search";
import MovieList from "../component/MovieList";
import Rating from "../component/Rating";
import { connect } from "react-redux";
import { addMovie } from "../actions/index";
import MovieModal from "../component/MovieModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // minRating: 1,
      // titleSearch: "",
      show: false,
      isEdit: false
    };
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <Search
        // value={this.state.titleSearch}
        // onChange={newTitle => {
        //   this.setState({
        //     titleSearch: newTitle
        //   });
        // }}
        />
        <Rating
          className="rating"
          // etoile={this.state.minRating}
          // onChange={newRating => {
          //   this.setState({
          //     minRating: newRating
          //   });
          // }}
        />
        <div>
          <MovieList className="Card" />
          <button className="myButton" onClick={this.toggleModal}>
            Add movie
          </button>
          <MovieModal show={this.state.show} toggleModal={this.toggleModal} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
