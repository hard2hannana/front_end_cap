import { useReducer } from "react";
import { timesReducer, initializeTimes } from "./timesReducer";
import BookingDetails from "./BookingDetails";



export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  console.log(
    "[Main] availableTimes =",
    availableTimes,
    Array.isArray(availableTimes)
  );
  const updateTimes = () => {
    dispatch({ type: "SET_TIMES", payload: initializeTimes });
  };

  return (
    <div>
      <BookingDetails availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}
