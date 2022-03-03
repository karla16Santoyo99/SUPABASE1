import { useState } from "react";
import { supabase } from "../../config/supabaseClient";
import AppBar from "../../components/AppBar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Recordatorios({ session }) {

  const [loading, setLoading] = useState(false);
  const [titulo, setTitulo] = useState(null);
  const [fechacreacion, setFechaCreacion] = useState(null);
  const [contenido, setContenido] = useState(null);
  const [fecharecordatorio, setFechaRecordatorio] = useState(null);

 

  const EditarRecordatorio = async () => {
    setLoading(true);
    let cardid = parseInt(window.localStorage.getItem("id"));
    console.log("El id de tu card es", cardid);

    let { data, error } = await supabase
      .from("recordatorio")
      .update({
        titulo: titulo,
        fechacreacion: fechacreacion,
        contenido:contenido,
        fecharecordatorio: fecharecordatorio,
        updated_at: new Date(),
      })
      .match({ cardid: cardid });

    if (data) {
      setLoading(false);
      window.localStorage.setItem("id", "");
      alert("OK");
    } else {
      setLoading(false);
      console.log(error.message);
      throw error;
    }
  };

 

  return (
    <div className="form-widget">
      <AppBar />

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
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
          value={contenido || ""}
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
          onClick={() => EditarRecordatorio()}
          disabled={loading}
        >
          <Link to="/">{loading ? "Loading ..." : "Update"}</Link>
        </Button>
      </div>
    </div>
  );
}
