import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { correo, password} = this.state;
    console.log(correo, password);
    fetch("http://localhost:4000/api/auth/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if(data.status === "ok"){
          alert("Inicio de sesión exitoso");
          window.localStorage.setItem("token", data.data);
          window.location.href="./HomePageInstS";
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Iniciar Sesión</h3>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Introduce Correo"
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Introduce Contraseña"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordarme
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
      </form>
    )
  }
}
