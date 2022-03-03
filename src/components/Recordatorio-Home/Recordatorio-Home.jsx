import AppBar from "../../components/AppBar";
import { Card } from "../Card";
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Grid } from "@mui/material";

export default function RecordatorioHome({ session }) {
  const [, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  /*const [titulo, setTitulo] = useState(null);
    const [fechacreacion, setFechaCreacion] = useState(null);
    const [contenido, setContenido] = useState(null);
    const [fecharecordatorio, setFechaRecordatorio] = useState(null);*/

  useEffect(() => {
    getRecordatories();
  }, []);

  const getRecordatories = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error } = await supabase
        .from("recordatorio")
        .select(`cardid, titulo, fechacreacion, contenido, fecharecordatorio `)
        .eq("id", user.id)
      if (error) {
        throw error;
      }

      if (data) {
        setCard(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <AppBar />

      <Grid container padding={10} spacing={7} className="CARD">
        <Grid item xs={12} sm={6} md={4}>
          {card &&
            card.map((cd, index) => (
              <Card
                key={index}
                cardid={cd.cardid}
                titulo={cd.titulo}
                contenido={cd.contenido}
                fechacreacion={cd.fechacreacion}
                fecharecordatorio={cd.fecharecordatorio}
              />
            ))}

          <br></br>
        </Grid>
      </Grid>
    </div>
  );
}
