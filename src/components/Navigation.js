import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link class="navbar-brand" to="/">INSTITUAQ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div classNme="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav  mr-auto">
                            <li className="nav-itemactive">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link " to="/">Biblioteca digital</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Servicios</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/user">Registrarse</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <form>
                                <input type="text" name="title" placeholder="Buscar..." />
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
