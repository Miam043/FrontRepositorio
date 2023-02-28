import React, { Component } from 'react'

export default class EditPer extends Component {
    render() {
        return (
             <section>
                <div class="card">

                    <div class="p-profile">
                        <img src="img/usuario.png" alt="perfil"/>
                    </div>

                    <div class="name">
                        <div class="text">
                            <label>Nombre(s)</label>
                            <input class="input-text" type="text" placeholder="Tu Nombre"/>
                        </div>
                        <div class="text">
                            <label>Apellido(s)</label>
                            <input class="input-text" type="text" placeholder="Tu Apellido" />
                        </div>
                        <div class="text">
                            <label>Correo electrónico</label>
                            <input class="input-text" type="email" placeholder="Tu Correo" />
                        </div>
                    </div>

                    <div class="more">
                        <button>Actualizar</button>
                    </div>
                    <div class="regresar">
                        <button>Regresar</button>
                    </div>
                </div>
            </section>
        )
    }
}
