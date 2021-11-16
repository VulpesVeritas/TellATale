import React, {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import '../css/registrarse.css'

import { CreateUsuario } from '../api/UsuariosAPI';

export default function Registrarse() {
    console.log("aaaaaiiuuda");
    const [usuario, setUsuario] = useState({
        nombre:"",
        correo:"",
        contrasena:"",
        tipo: false,
        listaSeguidos: []
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(e.target.value);
        setUsuario({
            ...usuario,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit, es decir, envio, usuario");
       await CreateUsuario(usuario);
    }
    return (
        <form onSubmit = {handleSubmit}>
        <div class="ContenedorRegistrarse">
             <div class="SegundoContenedorRegistrarse">
                <Box id="CajaDeDatos"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50vw' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            name = "nombre"
                            id="standard-required"
                            label="Nombre de Usuario"
                            defaultValue=" "
                            variant="standard"
                            value={usuario.nombre} 
                            onChange = {handleChange}
                        />
                        <TextField
                            required
                            name = "apodo"
                            id="standard-required"
                            label="Apodo"
                            defaultValue=" "
                            variant="standard"
                        />
                        <TextField
                            required
                            name = "correo"
                            id="standard-required"
                            label="Correo"
                            defaultValue=" "
                            variant="standard"
                            value={usuario.correo} 
                            onChange = {handleChange}
                        />
                        <TextField

                            name = "contrasena"
                            id="standard-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={usuario.contrasena} 
                            onChange = {handleChange}
                        />
                    </div>
                </Box>
                <Stack direction="row">
                        <div class="JalaPoFavo registrarse">
                            <Button type = "submit" variant="contained" color="success">
                                Registrarse
                            </Button>
                        </div>
                    </Stack>
            </div>
        </div>
        </form>
    )
}
