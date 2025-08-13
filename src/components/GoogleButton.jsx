import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";


export default function GoogleButton() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    alert("Signed in with Google successfully");
  }
  return (
    <button className="google-btn" onClick={handleClick}>
      <div className="google-bg-image">
        <img src={google} alt="Google logo" className="google-icon" />
      </div>
      <span>Continue with Google</span>
    </button>
  );
}
