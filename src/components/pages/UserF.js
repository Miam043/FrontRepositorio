import React, { Component } from 'react'
import "../UI/UserF.css"

export default class UserF extends Component {
    render() {
        return (
            <section>
                <div className="card">
                    <div className="p-profile">
                        <img src="./images/usuario.png" alt="perfil" />
                    </div>

                    <div className="name">
                        <h2>Docente</h2>
                        <p>Daniel Peréz Martínez</p>
                        <h3>danielperez10@gmail.com</h3>
                    </div>

                    <div className="more">
                        <button>Editar Perfil</button>
                    </div>

                    <a href="./HomePageInstS" className="alinear-derecha flex">
                        <input className="boton w-sm-100" type="submit" value="Regresar"/>
                    </a>
                </div>

                <div className="logo_uaq">
                    <img src="./images/uaq.png" alt="logo"/>
                </div>
            </section>
        )
    }
}
