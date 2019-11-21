import React from "react";

const Results = ({ florists }) => {
  return (
    <div className="results">
      {florists ? (
        florists.map(x => {
          return (
            <div key={x.id} className="items">
              <h2>{x.name}</h2>
              <img src={x.image_url} height="200" width="200" />
              <h3>
                Rating: <span>{x.rating} stars</span>
              </h3>
              <h3>
                Phone: <span>{x.display_phone} </span>
              </h3>
              <h3>
                Location: <span>{x.location.display_address}</span>{" "}
              </h3>
            </div>
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Results;
