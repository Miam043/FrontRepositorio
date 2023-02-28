import React, { Component } from 'react'
import M from 'materialize-css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { correo, password } = this.state;
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
        if (data.status === "ok") {
          M.toast({ html: 'Exitoso', classes: '#43a047 green darken-1' })
          localStorage.setItem("token", data.data)
          localStorage.setItem("user", JSON.stringify(data.data))
          window.location.href = "/HomePageInstS";
        } else
          M.toast({ html: 'Correo o Contraseña invalidos', classes: '#b71c1c red darken-4' })
      });
  }

  render() {
    return (
      <section>
        <h1>INSTITUAQ</h1>

        <form className="formulario" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>INICIO DE SESIÓN</legend>

            <div className="contenedor_campo">
              <div className="campo">
                <label>Correo</label>
                <input className="input-text" type="email" placeholder="Tu Correo" onChange={(e) => this.setState({ correo: e.target.value })} />
              </div>

              <div className="campo">
                <label>Contraseña</label>
                <input className="input-text" type="password" placeholder="Tu Contraseña" onChange={(e) => this.setState({ password: e.target.value })} />
              </div>

            </div>

            {/*--Boton entrar--*/}
            <div className="alinear-derecha flex">
              <input className="boton w-sm-100" type="submit" value="Entrar" />
            </div>

            <br></br>

            {/*--¿Olvidaste tu contraseña?--*/}
            <div className="password">
              <a href="./Recuperacion-password">¿Olvidaste tu contraseña?</a>
            </div>

            {/*--Registro--*/}
            <nav className="navegacion">
              <a>¿No tienes cuenta?</a>
              <a className="navegacion__registro navegacion__registro--activo" href="./user">Registrate</a>
            </nav>


            <a href="./">
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </fieldset>
        </form>
      </section>
    )
  }
}

