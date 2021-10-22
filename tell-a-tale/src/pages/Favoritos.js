import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
import '../css/tarjetas.css'

export default function Favoritos() {
    return (
        <div className='contenedorPrinc'>
            <div className='historias' >
            <ActionAreaCard></ActionAreaCard>
            <ActionAreaCard></ActionAreaCard>
            <ActionAreaCard></ActionAreaCard>
            </div>
        </div>
        
    )
}
