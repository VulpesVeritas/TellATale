import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
//import BasicRating from '../components/Calificacion'
import '../css/tarjetas.css'

export default function Index() {
    return (
        <div className='contenedorPrinc'>
                <div className='carrusel'>
                
                </div>
                <div className='historias' >
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                </div>
        </div>
    )
}
