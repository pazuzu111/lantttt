import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFlorists } from "./actions/actions";
import Results from "./components/Results";
import "./App.css";

function App(props) {
  navigator.geolocation.getCurrentPosition(loc => {
    props.actions.getFlorists(loc.coords.latitude, loc.coords.longitude);
  });

  return (
    <div className="App">
      <form>
        <input
          id="search"
          type="search"
          name="id"
          autoComplete="off"
          placeholder="put in your address..."
        />
      </form>

      <Results florists={props.florists} />
    </div>
  );
}

const mapStateToProps = state => {
  return { florists: state.florists, loading: state.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getFlorists }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
