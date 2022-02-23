import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { cyan } from '@mui/material/colors';


const Navbar = () => {

    return (

        <div>

            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="fixed" sx={{ bgcolor: cyan[700] }}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >


                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/">
                                Inicio
                            </Link>
                        </Typography>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 2 }}>

                        </Typography>
                       

                        <Button color="inherit">
                            < Link to="/AddRecordatorio">
                                Nuevo Recordatorio
                            </Link>
                        </Button>

                        <Button>
                            <a href='https://github.com/karla16Santoyo99/SUPABASE1'>
                                Github
                            </a>
                        </Button>

                        <Button color="inherit" >
                            <Link to="/Account">
                                Perfil
                            </Link>
                        </Button>



                        <Button color="inherit" onClick={() => supabase.auth.signOut()}>
                            Salir
                        </Button>










                    </Toolbar>

                </AppBar>
            </Box>



        </div>
    );
}

export default Navbar