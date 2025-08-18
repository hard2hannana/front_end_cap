import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function GuestDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });


  useEffect(() => {
    if (!booking) navigate("/reservations");
  }, [booking, navigate]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { date, time, guests, occasion } = formGuest;
        const guestsLabel =
          availableGuests.find((g) => g.value === guests)?.label ||
          `${guests} ${guests === 1 ? "person" : "people"}`;

        const success = window.submitAPI(formGuest);
        if (success) 
          toast.success(
            `Booked: ${guestsLabel} on ${date} at ${time} — ${occasion}`,
            { autoClose: 4000 }
          );
        navigate("/confirmed");
    }

    return (
      <div className="res-wrapper details-wrapper">
        <section className="form-pane">
          <form className="input-column" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full name"
              aria-label="Full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="notes"
              rows={4}
              placeholder="Notes (optional)"
              aria-label="Notes"
              value={form.notes}
              onChange={handleChange}
            />
            <div className="form-actions">
              <button type="button" className="btn secondary">
                Back
              </button>
              <button type="submit" className="btn primary">
                Complete booking
              </button>
            </div>
          </form>

          <aside className="details-pane">
            <h4 className="pane-title">Little Lemon Chicago</h4>
            <ul className="summary-list">
              <li>
                <span>Date</span>
                <strong>{booking?.date || "—"}</strong>
              </li>
              <li>
                <span>Time</span>
                <strong>{booking?.time || "—"}</strong>
              </li>
              <li>
                <span>Guests</span>
                <strong>{booking?.guests ?? "—"}</strong>
              </li>
              <li>
                <span>Occasion</span>
                <strong>{booking?.occasion || "—"}</strong>
              </li>
            </ul>
            <p className="fine-print">
              Having a reservation does not guarantee immediate seating. Thank
              you for your patience.
            </p>
          </aside>
        </section>
      </div>
    );
}