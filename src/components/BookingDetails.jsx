import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"



const toLocalDate = (d = new Date()) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

export default function BookingDetails({
  
  availableTimes = [], // <-- default to [] so .map never crashes
  updateTimes = () => {},
}) {
console.log("[BookingDetails] received availableTimes:", availableTimes); 
  const navigate = useNavigate();
  const today = toLocalDate();

  // availableTimes = ["17:00","17:30","18:00","18:30","19:00","19:30","20:00"],
  // updateTimes

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
  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: "",
    occasion: "Just for fun!",
  });

  useEffect(() => {
    if (!availableTimes.length) return;
    setFormData((f) => {
      const desired =
        f.time && availableTimes.includes(f.time) ? f.time : availableTimes[0];
      if (desired === f.time) return f;
      return { ...f, time: desired };
    });
  }, [availableTimes]);

  useEffect(() => {
    if (!availableGuests.length) return;
    const values = availableGuests.map((g) => g.value);
    setFormData((f) => {
      const current = Number(f.guests);
      const next = values.includes(current) ? current : values[0];
      return { ...f, guests: next };
    });
  }, [availableGuests]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({
      ...f,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (name === "date") {
      updateTimes(new Date(value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { date, time, guests, occasion } = formData;
    const guestsLabel =
      availableGuests.find((g) => g.value === guests)?.label ||
      `${guests} ${guests === 1 ? "person" : "people"}`;

    toast.success(
      `Booked: ${guestsLabel} on ${date} at ${time} — ${occasion}`,
      { autoClose: 4000 }
    );
    navigate("/confirmed");

    console.log("Booking: ", formData);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
        />
        <select
          name="time"
          value={formData.time}
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
          value={formData.guests}
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
          value={formData.occasion}
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