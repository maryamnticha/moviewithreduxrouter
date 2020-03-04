import React from "react";
import { connect } from "react-redux";

import { searchChange } from "../actions/index";

const Search = ({ searchChange }) => (
  <div className="searchNavmenu">
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="type the movie name here ..."
        className="searchbox"
        onChange={e => searchChange(e.target.value)}
      />
      <button className="btn">Search</button>
    </section>
  </div>
);

export default connect(null, {
  searchChange
})(Search);
