
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

export default function SignInFields() {
  return (
    <div className="login-form">
      <label htmlFor="email">Email Address</label>
      <EmailInput />
      <label htmlFor="password">Password</label>
      <PasswordInput />
    </div>
  );
}

