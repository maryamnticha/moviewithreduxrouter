import React from "react";
import Etoiles from "./Etoiles";
import { ratingChange } from "../actions/index";
import { connect } from "react-redux";

const Rating = ({ ratingChange, minRate }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum Rating</span>
    <Etoiles etoile={minRate} onChangeEtoiles={ratingChange} />
  </div>
);
const mapStateToProps = state => ({
  minRate: state.ratingInput
});
export default connect(mapStateToProps, {
  ratingChange
})(Rating);
