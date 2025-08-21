import { useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
  const { state } = useLocation();

   if (!state) return <p>No booking found</p>;
  return (
    <main
      className="container"
      role="main"
      aria-labelledby="booking-confirmed-title"
    >
      <div className="confirm">
        <h2 id="booking-confirmed-title">Booking confirmed 🎉</h2>
        <p>Name: {state.name}</p>
        <p>Date: {state.date}</p>
        <p>Time: {state.time}</p>
        <p>Guests: {state.guestsLabel}</p>
        <p>Occasion: {state.occasion}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p>
        <p>Notes: {state.notes}</p>
        <p>
          Thanks! Your reservation is locked in. We've sent a confirmation to
          your email.
        </p>
      </div>
    </main>
  );
}
