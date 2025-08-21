import { useState, useEffect } from "react";
import logo from "../assets/logo_footer.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function GuestDetails({ booking, onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!booking) {
      onBack?.();
    }
  }, [booking, onBack]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { date, time, guests, occasion } = booking;
    const guestsLabel = `${guests} ${guests === 1 ? "person" : "people"}`;
    const { name, email, phone, notes} = form;
    

    const success = window.submitAPI();
    if (success)
      toast.success(
        `Booked: ${name} ${guestsLabel} on ${date} at ${time} — ${occasion}`,
        { autoClose: 4000 }
      );
    navigate("/confirmed", {
      state: {
        date,
        time,
        guests,
        guestsLabel,
        occasion,
        name,
        email,
        phone,
        notes,
      },
    });
  }

  return (
    <section className="booking-form">
      <form className="input-column input-row" onSubmit={handleSubmit}>
        <small className="required">* Required</small>
        <input
          name="name"
          placeholder="Full name *"
          aria-label="Full name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          aria-label="Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          aria-label="Phone"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          rows={4}
          placeholder="Special instructions (optional)"
          aria-label="Notes"
          value={form.notes}
          onChange={handleChange}
        />
        <button type="submit" className="btn-booking btn-submit">
          Complete booking
        </button>
        <button type="button" className="btn-back" onClick={onBack}>
          Back
        </button>
      </form>

      <aside className="details-pane">
        <img src={logo} alt="small green lemon logo" />
        <h4 className="pane-title">Little Lemon Chicago</h4>
        <ul className="summary-list">
          <li>
            <span>Name: </span>
            <strong>{form?.name || "—"}</strong>
          </li>
          <li>
            <span>Email: </span>
            <strong>{form?.email || "—"}</strong>
          </li>
          <li>
            <span>Phone: </span>
            <strong>{form?.phone || "—"}</strong>
          </li>
          <li>
            <span>Date: </span>
            <strong>{booking?.date || "—"}</strong>
          </li>
          <li>
            <span>Time: </span>
            <strong>{booking?.time || "—"}</strong>
          </li>
          <li>
            <span>Guests: </span>
            <strong>
              {booking?.guests != null
                ? `${booking.guests} ${
                    booking.guests === 1 ? "person" : "people"
                  }`
                : "—"}
            </strong>
          </li>
          <li>
            <span>Occasion: </span>
            <strong>{booking?.occasion || "—"}</strong>
          </li>
        </ul>
      </aside>
    </section>
  );
}