import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <header className="header__uaq">
                    <h1 className="text">INSTIT<span className="color-acento">UAQ</span></h1>
                </header>

                <div className="container__menu">
                    <div className="menu">
                        <input type="checkbox" id="check__menu" />
                        <nav>
                            <ul>
                                <li><a href="./" id="selected"></a></li>
                                <li><a href="#">Inicio de Sesión</a>
                                    <ul>
                                        <li><a href="./Login">Docentes</a></li>
                                        <li><a href="./Login">Alumno</a></li>
                                        <li><a href="./Login">Visitantes</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Ayuda</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
