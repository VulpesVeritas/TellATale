import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
import '../css/tarjetas.css'

export default function Favoritos() {
    return (
        <div className='contenedorPrinc'>
            <p class="Titulos">Historias que sigo</p>
            <div className='historias' >
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
            </div>
            <div className='historias' >
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
            </div>
            <div className='historias' >
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
            </div>
        </div>

    )
}
