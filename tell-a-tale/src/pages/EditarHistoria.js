import React from 'react'
import SimplePaper from '../components/CuadrosNotificaciones'

export default function EditarHistoria() {
    return (
        <div>
            <SimplePaper>
                <label>
                    Nombre
                </label>
                <input type='text'></input>
                <button>Editar</button>
            </SimplePaper>
        </div>
    )
}
