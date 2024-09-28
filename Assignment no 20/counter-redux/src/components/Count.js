import React from "react";
import { increment, decrement, reset } from "../store/slices/counter";
import { useSelector, useDispatch } from "react-redux";
import "../components/count.css";

function Count() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const doIncrement = () => {
    dispatch(increment());
  };
  const doDecrement = () => {
    dispatch(decrement());
  };
  const resetFunc = () => {
    dispatch(reset());
  };
  return (
    <div className="mainDiv">
      <h3>Counter</h3>
      <p className="span">Count: {count}</p>
      <button className="incrementBtn" onClick={doIncrement}>
        +
      </button>
      <button className="decrementBtn" onClick={doDecrement}>
        -
      </button>
      <p>Reset Counter</p>
      <button className="resetBtn" onClick={resetFunc}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          fill="currentColor"
          class="bi bi-arrow-counterclockwise"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
        </svg>
      </button>
    </div>
  );
}

export default Count;
