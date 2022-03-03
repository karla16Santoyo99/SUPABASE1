import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import AppBar from '../../components/AppBar';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";




export default function RecordatorioAdd({session}) {
 const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState(null);
    const [fechacreacion, setFechaCreacion] = useState(null);
    const [contenido, setContenido] = useState(null);
    const [fecharecordatorio, setFechaRecordatorio] = useState(null);
    

    useEffect(() => {
        getRecordatorios();
    }, [session]);

    async function getRecordatorios() {
      
            setLoading(false);
     
    }

    async function AgregarRecordatorio({ titulo, fechacreacion, contenido, fecharecordatorio  }) {
        setLoading(true);
        let cardid = parseInt( Math.random()*10000 );
        try {            
            const user = supabase.auth.user();
            

            const Agregar = {
                id: user.id,
                cardid: cardid,
                titulo, 
                fechacreacion, 
                contenido, 
                fecharecordatorio, 
                updated_at: new Date(),
            };

                
            let { error } = await supabase.from("recordatorio").insert(Agregar, {
                returning: "minimal", 
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            console.log("Si lo mandé jiji", cardid);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }
    


    return (
        
        <div>
         <AppBar/> 
         <h3>Aquí puedes agregar un Recordatorio</h3>

         
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={session.user.email}
                    disabled
                />
            </div>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo || ""}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fechacreacion">Fecha Creacion</label>
                <input
                    id="fechacreacion"
                    type="Date"
                    value={fechacreacion || ""}
                    onChange={(e) => setFechaCreacion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contenido">Contenido</label>
                <input
                    id="contenido"
                    type="text"
                    value={contenido ||""}
                    onChange={(e) => setContenido(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fecharecordatorio">Fecha Recordatorio</label>
                <input
                    id="fecharecordatorio"
                    type="Date"
                    value={fecharecordatorio || ""}
                    onChange={(e) => setFechaRecordatorio(e.target.value)}
                />
            </div>
           

            <div>
                <Button
                    className="button block primary"
                    onClick={() =>
                        AgregarRecordatorio({ titulo, fechacreacion, contenido, fecharecordatorio })
                    }
                    disabled={loading}
                >
                    <Link to="/">
                    {loading ? "Loading ..." : "Guardar"}
                    </Link>
                </Button>
            </div>                 
        </div>
    );
}
