import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
//import BasicRating from '../components/Calificacion'
import Slide from '../components/Slide'
import '../css/tarjetas.css'

export default function Index() {
    return (
        <div className='contenedorPrinc'>
            <Slide></Slide>
                <div className='historias' >
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                </div>
                <div className='historias' >
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                </div>
                <div className='historias' >
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                    <ActionAreaCard ></ActionAreaCard>
                </div>
        </div>
    )
}
