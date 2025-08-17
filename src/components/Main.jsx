import { useReducer } from "react";
import { timesReducer, initializeTimes, updateTimes as computeTimes } from "./timesReducer";
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
  const updateTimes = (selectedDate) => {
    const next = computeTimes(selectedDate, availableTimes);
    dispatch({ type: "SET_TIMES", payload: next });
  };

  return (
    <div>
      <BookingDetails availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}
