import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function MultiActionAreaCard({ titulo, fechacreacion, contenido, fecharecordatorio }) {
  return (
    <Card sx={{ display: 'flex', height: 150, width: 700 }}>

      <CardActionArea>
        <CardContent sx={{ flex: '1 0 auto' }}>

          <Typography gutterBottom variant="body2" component="div" color="gray">
            {/* color="text.secondary" */}
            Titulo:
            <Typography variant="body2" color="Black">
              {titulo}
            </Typography>
          </Typography>

          <Typography gutterBottom variant="body2" component="div" color="gray">
            Contenido:
            <Typography variant="body2" color="Black">
              {contenido}
            </Typography>
          </Typography>

          <Typography variant="body2" color="gray">
            Fecha de creacion:
            <Typography variant="body2" color="Black">
              {fechacreacion}
            </Typography>
          </Typography>
          <Typography variant="body2" color="gray">
            Fecha de Recordatorio:
            <Typography variant="body2" color="Black">
              {fecharecordatorio}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        <Link to="/Recordatorios">
          Editar
        </Link>
      </Button>


    </Card>
  );
}


