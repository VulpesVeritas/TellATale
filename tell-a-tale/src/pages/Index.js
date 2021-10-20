import React from 'react'
import ActionAreaCard from '../components/Tarjetas'
import BasicRating from '../components/Calificacion'

export default function Index() {
    return (
        <div>
            <div>
                Pagina principal
            </div>
            <div >
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
            </div>
            
            <BasicRating></BasicRating>
        </div>
    )
}
