import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput(inputId, name) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-wrapper">
      <input
        id={inputId}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder="&#x1F512;  Password"
      />
      <button
        type="button"
        className="toggle-btn"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
}

export default PasswordInput;
