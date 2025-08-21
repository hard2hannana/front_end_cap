import { useEffect, useState } from "react";



const toLocalDate = (d = new Date()) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

export default function BookingDetails({
  onNext,
  availableTimes, 
  updateTimes = () => {},
}) {
  
  const today = toLocalDate();

  const [availableGuests, setAvailableGuests] = useState(
    Array.from({ length: 12 }, (_, i) => i + 1).map((n) => ({
      value: n,
      label: `${n} ${n === 1 ? "person" : "people"}`,
    }))
  );
  const [availableOccasion, setAvailableOccasion] = useState([
    "Just for fun!",
    "Birthday!",
    "Anniversary!",
  ]);
  const [formBooking, setformBooking] = useState({
    date: today,
    time: "",
    guests: "",
    occasion: "Just for fun!",
  });

  useEffect(() => {
    if (!availableTimes.length) return;
    setformBooking((f) => {
      const desired =
        f.time && availableTimes.includes(f.time) ? f.time : availableTimes[0];
      if (desired === f.time) return f;
      return { ...f, time: desired };
    });
  }, [availableTimes]);

  useEffect(() => {
    if (!availableGuests.length) return;
    const values = availableGuests.map((g) => g.value);
    setformBooking((f) => {
      const current = Number(f.guests);
      const next = values.includes(current) ? current : values[0];
      return { ...f, guests: next };
    });
  }, [availableGuests]);

  function handleChange(e) {
    const { name, value } = e.target;
    setformBooking((f) => ({
      ...f,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (name === "date") {
      updateTimes(new Date(value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // pass booking data to the next screen
    onNext(formBooking);
  }

  return (
    <form className="form-booking" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="date"
          name="date"
          value={formBooking.date}
          onChange={handleChange}
          min={today}
        />
        <select
          name="time"
          value={formBooking.time}
          onChange={handleChange}
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          name="guests"
          value={formBooking.guests}
          onChange={handleChange}
          required
        >
          {availableGuests.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          name="occasion"
          value={formBooking.occasion}
          onChange={handleChange}
        >
          {availableOccasion.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <button type="submit" className="btn-booking">
          Find a Table
        </button>
      </div>
    </form>
  );
}