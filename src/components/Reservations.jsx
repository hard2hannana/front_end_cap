import BookingDetails from "./BookingDetails";
import logo from "../assets/Logo.svg"
import Main from "./Main";


export default function() {
  return (
    <div className="res-wrapper">
      <div className="res-content-wrapper">
        <h2 className="res-title">Book a table at<br /> Little Lemon Chicago</h2>
        <h3 className="res-content">Find a table</h3>
        <Main />
        <img className="res-logo"  src={ logo } alt="little lemon logo" />
        <p className="res-para">
          Having a reservation does not guarantee immediate seating.<br /> Thank you for your patience.
        </p>
      </div>
    </div>
  );
}