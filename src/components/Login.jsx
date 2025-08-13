import { useState } from "react";
import GoogleButton from "./GoogleButton";
import PasswordInput from "./PasswordInput";
import AuthToggle from "./AuthToggle";
import SignInFields from "./SignInFields";
import SignUpFields from "./SignUpFields";  
import { useNavigate } from "react-router-dom";


  export default function Login() {
    const [mode, setMode] = useState("signin");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();                 // stop real form submit
    alert("Signed in successfully!");
    navigate("/"); 
    }
  return (
    <section className="login-page">
      <div className="login-wrapper">
        <form className="login-form" method="POST" onSubmit={handleSubmit}>
          <h3 className="">Sign in or Sign up</h3>
          <AuthToggle value={mode} onChange={setMode} />
          <GoogleButton />
          {mode === "signin" ? <SignInFields /> : <SignUpFields />}
          <div className="check-box">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn signin-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
} 