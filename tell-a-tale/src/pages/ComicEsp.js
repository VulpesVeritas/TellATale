import React from 'react'
import SimplePaper from '../components/CuadrosNotificaciones'

export default function ComicEsp() {
    return (
        <div>
            <text>Titulo comic</text>
            <div>
                <SimplePaper></SimplePaper>
                <SimplePaper></SimplePaper>
                <SimplePaper></SimplePaper>
                <SimplePaper></SimplePaper>
            </div>
            <div>
                Descripcion
                <br></br>
                <text>Aqui va una descripcion</text>
                <image src='./imagenes/goreAgony2'></image>
            </div>
        </div>
    )
}
