import React, { Component } from 'react'

export default class NavigationHome extends Component {
    render() {

        async function signout() {
            localStorage.removeItem('token');
        }
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
                                <li><a href="./HomePageInstS" id="selected"></a></li>
                                <li><a href="./UserF">Mi cuenta</a>
                                    <ul>
                                        <li><a href="./UserF">Mi perfil</a></li>
                                        <li><a href="./create">Subir documentos</a></li>
                                        <li><a  onClick={() => signout()} href="./">Cerrar Sesión</a></li>
                                    </ul>
                                </li>
                                <li><a href="./library">Mi biblioteca</a></li>
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

