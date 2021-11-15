import React from 'react'
import '../css/LeerComic.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function LeerComic() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div class="ContenedorLeerComic">
            <div class="ImagenesPagComic">
                <img class="imComic" src="http://pm1.narvii.com/6206/1bd213a3214c1d52b9eb657d6f09ed823bc84984_00.jpg" alt="Cargando..."></img>
                <img class="imComic" src="http://pm1.narvii.com/6206/1bd213a3214c1d52b9eb657d6f09ed823bc84984_00.jpg" alt="Cargando..."></img>
                <img class="imComic" src="http://pm1.narvii.com/6206/1bd213a3214c1d52b9eb657d6f09ed823bc84984_00.jpg" alt="Cargando..."></img>
            </div>
            <div class="Comentarios">
                <div class="EscribirComentario">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40vw' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Escribe lo que piensas"
                                multiline
                                rows={3}
                                defaultValue="Default Value"
                                variant="filled"
                            />
                        </div>
                    </Box>
                </div>
                <div class="Comentario">
                    <h3 class="NombrePersonaComentarios">Nombre de la persona aquí</h3>
                    <p class="TextoPersonaComentario">Mensaje de la persona aquí</p>
                </div> <div class="Comentario">
                    <h3 class="NombrePersonaComentarios">Aiuda</h3>
                    <p class="TextoPersonaComentario">Trato de salvar el semeste</p>
                </div>
            </div>
        </div>
    )
}
