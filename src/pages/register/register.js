import "./register.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">
            Register
        </span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Enter your Username..."/>

            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter your email..."/>

            <label>Password</label>
            <input className="registerInput" type="Password" placeholder="Enter your password..."/>
            <button className="registerButton">Register</button>
            <button className="loginRegisterButton">
              <Link className="link" to="/login">Login</Link></button>
        </form>

    </div>
  )
}
