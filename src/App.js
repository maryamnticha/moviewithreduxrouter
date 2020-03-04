import React from "react";
import "./App.css";
import Home from "./component/home";
import Description from "./component/description";
import { BrowserRouter, Route } from "react-router-dom";
// import MovieList from "./component/MovieList";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Route path="/" Component={MovieList} /> */}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/description/:id"
          render={props => <Description {...props} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Search from "./component/Search";
// import MovieList from "./component/MovieList";
// import Rating from "./component/Rating";
// import { connect } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";
// import { addMovie } from "./actions/index";
// import MovieModal from "./component/MovieModal";
// import movieCard from "./component/movieCard";
// import Description from "./component/description";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       minRating: 1,
//       titleSearch: "",
//       show: false,
//       isEdit: false
//     };
//   }

//   toggleModal = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Search
//             value={this.state.titleSearch}
//             onChange={newTitle => {
//               this.setState({
//                 titleSearch: newTitle
//               });
//             }}
//           />
//           <Rating
//             className="rating"
//             etoile={this.state.minRating}
//             onChange={newRating => {
//               this.setState({
//                 minRating: newRating
//               });
//             }}
//           />
//           <div>
//             <MovieList
//               className="Card"
//               movies={this.props.movies.filter(
//                 el =>
//                   el.rating >= this.state.minRating &&
//                   el.title
//                     .trim()
//                     .toLowerCase()
//                     .includes(this.state.titleSearch.trim().toLowerCase())
//               )}
//             />
//             <button className="myButton" onClick={this.toggleModal}>
//               Add movie
//             </button>
//             <MovieModal show={this.state.show} toggleModal={this.toggleModal} />
//           </div>
//           <Route exact path="/" Component={MovieList} />
//           <Route
//             exact
//             path="/description/:id"
//             render={props => <Description {...props} />}
//           />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     movies: state.movies
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     addMovie: movie => dispatch(addMovie(movie))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
