import React from "react";
import "../App.css";
import Img from "../Assets/Gallery/Rav.jpg";
export const Workshop = () => {
  return (
    <body className="body-container">
      <span className="aboutme-text">
        Taller de Dibujo y Pintura <br />
        Mayores de 13 Años<br />
        Únete a nuestro apasionante taller de dibujo y pintura diseñado
        específicamente para personas mayores de 13 años.
        <br /> <br />
        Sumérgete en el fascinante mundo del arte, donde explorarás técnicas de
        dibujo y pintura mientras potencias tu creatividad y desarrollas tus
        habilidades artísticas. <br />
        Horarios: Días: Todos jueves. Horario: De 17:00 a 19:00 horas.
        <br /> <br />
        ¡Descubre tu potencial artístico y libera tu creatividad en un espacio
        dedicado al arte! Acompáñanos en esta aventura artística y perfecciona
        tus habilidades en un entorno ameno y lleno de inspiración.
      </span>

      <img className="img" alt="img" src={Img} />
    </body>
  );
};
