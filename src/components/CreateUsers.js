import React, { Component } from 'react'
//import axios from 'axios'

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      matricula: "",
      Roles: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nombre, apellido, correo, password, matricula, Roles} = this.state;
    console.log(nombre, apellido, correo, password, matricula, Roles);
    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        correo,
        password,
        matricula,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registrarse</h3>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Milton Isai"
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" className="form-control" placeholder="Alvarez Marquez"
            onChange={(e) => this.setState({ apellido: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="miam@uaq.com.mx"
            onChange={(e) => this.setState({ correo: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Introduce contraseña"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Matricula</label>
          <input
            type="text"
            className="form-control"
            placeholder="Introduce matricula"
            onChange={(e) => this.setState({ matricula: e.target.value })} />
        </div>

        <div>
          <label>
            Usuario: 
            <select onChange={(e) => this.setState({ Roles: e.target.value })}>
            <option disabled="">Selecciona una opción</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Docente</option>
            </select>
          </label>
        </div>

        

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          Tienes <a href="/sign-in">cuenta?</a>
        </p>
      </form>
    )
  }
}