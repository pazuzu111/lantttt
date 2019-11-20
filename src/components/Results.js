import React from "react";

const Results = ({ florists }) => {
  return (
    <div className="results">
      {florists ? (
        florists.map(x => {
          return (
            <div key={x.id} className="items">
              <h3>{x.name}</h3>
              <img src={x.image_url} height="62" width="62" />
              <h3> Rating: {x.rating} </h3>
              <h3> Phone: {x.display_phone} </h3>
              <h3> Location: {x.location.display_address} </h3>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Results;
