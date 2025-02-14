import { login, signup } from "./actions";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.login}>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
