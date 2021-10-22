import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function SimplePaperSubidas() {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          backgroundColor: 'rgb(55, 107, 104)',
          m: 1,
          width: 1100,
          height: 225,
        },
      }}
    >
      <Paper elevation={3}>
          <div >
            <img 
                src="https://pbs.twimg.com/media/E9vwPTbX0AE3r0I?format=jpg&name=large"
                alt="Agony" 
                height="175"
                width="175"/>
            <div>
              <div>
                <h1>Titulo</h1>
                Descripcion
              </div>
              <div>
                # capitulos
              </div>
            </div>
          </div>
      </Paper> 
    </Box>
  );
}