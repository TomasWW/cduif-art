import React from "react";
import "../App.css";
import Img from "../Assets/Gallery/Rav.jpg"
export const Home = () =>{
    return(
        <body className="body-container">
        
        <span className="aboutme-text">
        ¡Hola! Soy Cecilia, licenciada en Bellas Artes por la UNR y amante del arte que se sumerge en el mundo de la
            pintura de animales y los paisajes.
            <br />
            <br />
            En mi arte, busco capturar la esencia y la belleza de la naturaleza, centrándome en los cuervos como
            protagonistas. Cada trazo es una representación de mi fascinación por estos seres inteligentes y
            misteriosos, incorporando la influencia y la inspiración que encuentro en la asombrosa naturaleza islandesa.
            <br />
            <br />
            ¡Bienvenido a mi rincón artístico, donde los cuervos vuelan libres y la creatividad se une con la esencia
            salvaje de Islandia!
          
          </span>

        
        <img  className="img" alt="img" src={Img}/>


        



        </body>
    )
}