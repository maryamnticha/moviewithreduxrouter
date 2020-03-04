import React from "react";
const Etoiles = ({ etoile, onChangeEtoiles = () => {} }) => {
  console.log("etoile", etoile);
  let et = [];
  for (let i = 0; i < 5; i++) {
    if (i < etoile) {
      et.push(
        <span
          className="etoiles"
          onClick={() => onChangeEtoiles(i + 1)}
          key={i}
        >
          ★
        </span>
      );
    } else {
      et.push(
        <span
          className="etoiles"
          onClick={() => onChangeEtoiles(i + 1)}
          key={i}
        >
          ☆
        </span>
      );
    }
  }
  return <div>{et}</div>;
};

export default Etoiles;
