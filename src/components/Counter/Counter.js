import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return <p style={{ fontSize: "40px", margin: "20px" }}>{props.counter}</p>;
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(Counter);
