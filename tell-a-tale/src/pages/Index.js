import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
//import BasicRating from '../components/Calificacion'
import Slide from '../components/Slide'
import '../css/index.css'

import { Fragment } from 'react';


export default function Index() {
    return (
        <Fragment>
        <Slide></Slide>            
        <div className='contenedorPrinc'>            
            <p class="Titulos">Actualizados</p>
            <div className='historias' >
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
            </div>
            <p class="Titulos">Historias ocultas</p>
            <div className='historias' >
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
            </div>
            <p class="Titulos">Nuevas historias</p>
            <div className='historias' >
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
            </div>
            <p class="Titulos">Más leidos</p>
            <div className='historias' >
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
                <ActionAreaCard ></ActionAreaCard>
            </div>
        </div>
        </Fragment>
    )
}
