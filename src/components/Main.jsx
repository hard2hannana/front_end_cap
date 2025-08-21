import { useReducer } from "react";
import { timesReducer, initializeTimes, } from "./timesReducer";
import BookingDetails from "./BookingDetails";



export default function Main({ onNext }) {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const toLocalDate = (d) =>
    d instanceof Date
      ? new Date(d.getFullYear(), d.getMonth(), d.getDate()) // strip time/tz
      : new Date(`${d}T00:00`); // d is "YYYY-MM-DD"

    const updateTimes = (picked) => {
    const date = toLocalDate(picked);
    const api =
      (typeof fetchAPI === "function" && fetchAPI) ||
      (typeof window !== "undefined" &&
        typeof window.fetchAPI === "function" &&
        window.fetchAPI) ||
      null;

    const times = api ? api(date) : [];
    dispatch({ type: "SET_TIMES", payload: times });
  };
  
  return (
    <div>
      <BookingDetails
        onNext={onNext}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}
