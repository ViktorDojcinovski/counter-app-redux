import { data } from "./types";

// step 5: declare action creator (function that returns an action)
const increaseCounter = () => {
  return {
    type: data.counter.INCREASE_COUNTER,
  };
};

const decreaseCounter = () => {
  return {
    type: data.counter.DECREASE_COUNTER,
  };
};

export { increaseCounter, decreaseCounter };
