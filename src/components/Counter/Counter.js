import React from "react";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../../redux";

const Counter = (props) => {
  // step 2: define an event handler which will trigger an action dispatcher
  const onClickIncrease = () => {
    // step 3: call the action dispatcher
    props.increaseCounter();
  };

  const onClickDecrease = () => {
    props.decreaseCounter();
  };
  return (
    <>
      <p style={{ fontSize: "40px", margin: "20px" }}>
        counter: {props.counter}
      </p>
      {/* step 1:  create an event listener which will trigger an event handler*/}
      <button onClick={onClickDecrease}> - </button>
      <button onClick={onClickIncrease}> + </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  // step 4: define the action dispatcher with the help of the dispatch keyword
  // (step 5 continues in the redux structure)
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect()()
