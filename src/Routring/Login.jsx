import React from "react";

const Login = () => {
  return (
    <div className="login">
      <b>Login</b>
      <form>
        <label for="Uname">Username</label>
        <br />
        <input type="text" class="inputa" placeholder="Masukan Username" />
        <br />
        <label for="Pname">Password</label>
        <br />
        <input type="password" class="inputa" placeholder="Masukan Password" />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
