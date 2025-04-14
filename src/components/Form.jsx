import React, { useState } from "react";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");

  return (
    <div className="container mt-5">
      <h1>Formularz Rejestracyjny</h1>
      <form>
        <div className="form-group mb-4">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            className="form-control"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            {...(login.length < 2 && login.length > 0
              ? { className: "form-control is-invalid" }
              : { className: "form-control" })}
          />
          {login.length < 2 && login.length > 0 ? (
            <div className="invalid-feedback">
              Login musi mieć co najmniej 2 znaki.
            </div>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            {...(password.length < 8 && password.length > 0
              ? { className: "form-control is-invalid" }
              : { className: "form-control" })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && password.length > 0 ? (
            <div className="invalid-feedback">
              Hasło musi mieć co najmniej 8 znaków
            </div>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...(!email.match("@") && email.length > 0
              ? { className: "form-control is-invalid" }
              : { className: "form-control" })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email.match("@") && email.length > 0 ? (
            <div className="invalid-feedback">Email musi zawierać znak @</div>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="repeatEmail">Potwierdź Email</label>
          <input
            type="email"
            id="repeatEmail"
            {...(repeatEmail != email && repeatEmail.length > 0
              ? { className: "form-control is-invalid   " }
              : { className: "form-control " })}
            value={repeatEmail}
            onChange={(e) => setRepeatEmail(e.target.value)}
          />
          {repeatEmail != email && repeatEmail.length > 0 ? (
            <div className="invalid-feedback">Emaili muszą być takie same</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default Form;
