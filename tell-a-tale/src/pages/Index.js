import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
//import BasicRating from '../components/Calificacion'
import '../css/tarjetas.css'
import Slide from '../components/Slide'

export default function Index() {
    return (
        <div className='contenedorPrinc'>
            <Slide></Slide>
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
