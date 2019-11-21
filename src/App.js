import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFlorists, getFlorists2 } from "./actions/actions";
import Results from "./components/Results";
import "./App.css";

const App = props => {
  const [input, setInput] = useState("");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loc => {
      props.actions.getFlorists(loc.coords.latitude, loc.coords.longitude);
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.actions.getFlorists2(e.target.value);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>

      <Results florists={props.florists} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
