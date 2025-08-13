import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";

export default function SignUpFields() {
  return (
    <div className="login-form">
      <label htmlFor="name">Full Name</label>
      <NameInput />
      <label htmlFor="email">Email Address</label>
      <EmailInput />
      <label htmlFor="password">Password</label>
      <PasswordInput />
      <label htmlFor="confirm" name="confirmpassword">confirm Password</label>
      <PasswordInput inputId="confirm" name="confirmpassword"/>
    </div>
  );
}
