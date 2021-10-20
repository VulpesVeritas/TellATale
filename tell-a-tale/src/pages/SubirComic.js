import React from 'react'
import ComboBox from '../components/ComboBox'

export default function SubirComic() {
    return (
        <div>
            <div>
                <image src='./imagenes/goreAgony2'>

                </image>
                <image src='./imagenes/goreAgony2'>

                </image>
            </div>
            <div>
            <ComboBox>Genero 1</ComboBox>
            <ComboBox>Genero 1</ComboBox>
            </div>
            <div>
                <label>
                    Titulo
                </label>
                <input type='text'></input>
                <label>
                    Descripcion
                </label>
                <textarea></textarea>
            </div>
            
        </div>
    )
}
