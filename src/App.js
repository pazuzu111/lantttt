import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFlorists, getFlorists2 } from "./actions/actions";
import Results from "./components/Results";
import "./App.css";

const App = props => {
  const [input, setInput] = useState("k");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loc => {
      props.actions.getFlorists(loc.coords.latitude, loc.coords.longitude);
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.actions.getFlorists2(input);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="logo">
        <img
          src="https://mvp-lantern-staging.s3.us-east-2.amazonaws.com/LOGO_Black.png"
          height="85"
          width="402"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What is your location?"
        />
        <input type="submit" value="Submit" />
      </form>

      <div className="results-container">
        <div>RESULTS</div>
        <Results florists={props.florists} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { florists: state.florists, loading: state.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getFlorists, getFlorists2 }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
