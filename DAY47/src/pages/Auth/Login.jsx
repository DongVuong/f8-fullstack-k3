import { useDispatch } from "react-redux";
import { getApiKey } from "../../stores/middleware/loginMiddleware";
import { useState } from "react";
import "./login.scss";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email;
    dispatch(getApiKey({ email: value }));
    setEmail("");
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Nhập "Email" đã đăng kí với F8</h3>
        <div className="input-box">
          <input
            type="email"
            name="loginValue"
            placeholder="Email..."
            value={email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
