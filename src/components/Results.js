import React from "react";

const Results = ({ florists }) => {
  return (
    <div className="results">
      {florists ? (
        florists.map(x => {
          return (
            <div key={x.id} className="items">
              <h3>{x.name}</h3>
              <img src={x.image_url} height="82" width="82" />
              <h3> Rating: {x.rating} </h3>
              <h3> Phone: {x.display_phone} </h3>
              <h3> Location: {x.location.display_address} </h3>
            </div>
          );
        })
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default Results;