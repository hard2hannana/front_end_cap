export default function AuthToggle({ value, onChange }) {
  return (
    <div
      className="dual-button"
      role="radiogroup"
      aria-label="Sign in or Sign up"
    >
      <button
        type="button"
        role="radio"
        aria-checked={value === "signin"}
        disabled={value === "signin"}
        className={`btn btn-left ${value === "signin" ? "active" : ""}`}
        onClick={() => onChange("signin")}
      >
        Sign In
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={value === "signup"}
        disabled={value === "signup"}
        className={`btn btn-right ${value === "signup" ? "active" : ""}`}
        onClick={() => onChange("signup")}
      >
        Sign Up
      </button>
    </div>
  );
}
