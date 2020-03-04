import React from "react";
import { connect } from "react-redux";

function Description(props) {
  return (
    <div>
      {props.movies
        .filter(el => el.id == props.match.params.id)
        .map((el, id) => (
          <div className="DescCard">
            <h1 className="Title">{el.title}</h1>
            <h2 className="desc"> Description :</h2>
            <p className="desc">{el.description}</p>
            <h5 className="desc">Nbre d'épisodes : </h5>
            <p className="desc">{el.NbreEp}</p>
            <h5 className="desc">Nombre de Saison : </h5>
            <p className="desc">{el.NbreSaison}</p>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Description);
