import "./login.css";

export default function login() {
  return (
    <div className="login">
        <span className="LoginTitle">
            Login
        </span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..."/>

            <label>Password</label>
            <input type="Password" placeholder="Enter your password..."/>
            <button className="loginButton">Login</button>
            <button className="loginRegisterButton">Register</button>
        </form>

    </div>
  )
}
