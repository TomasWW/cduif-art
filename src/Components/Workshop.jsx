import React from "react";
import "../App.css";
import Img from "../Assets/Gallery/RavenRaven.jpg";
import { Link } from "react-router-dom";

export const Workshop = () => {
  return (
    <div className="Wk-container">
      <span className="WK">
        <span className="title">Taller de Dibujo y Pintura</span> <br />
        <br />
        Únete a nuestro apasionante taller de dibujo y pintura diseñado
        específicamente para personas mayores de 13 años.
        <br /> <br />
        Sumérgete en el fascinante mundo del arte, donde explorarás técnicas de
        dibujo y pintura mientras potencias tu creatividad y desarrollas tus
        habilidades artísticas. <br />
        <br />
        ¡Descubre tu potencial artístico y libera tu creatividad en un espacio
        dedicado al arte! Acompáñanos en esta aventura artística y perfecciona
        tus habilidades en un entorno ameno y lleno de inspiración.
        <br />
        <br />
        <span className="hrs">
          Horarios: Días: Todos jueves. Horario: De 17:00 a 19:00 horas.
        </span>

        <br/>
        <Link to="/Contact">Para más información, haz clic aquí</Link>
      </span>

      <img className="img-WK" alt="img" src={Img} />
    </div>
  );
};
