import React from "react";
import "../App.css";
import { SiInstagram } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import IMG from "../Assets/Gallery/ShowRavYel.jpg"

export const Contact = () => {
    const iconStyle = {
      marginRight: '8px', // Espacio entre los iconos y los enlaces
      display: 'inline-block', // Asegura que los elementos estén en línea
    };
  
    return (
       
<div className="contact-container">

      <span className="contact">
        

          <SiInstagram style={iconStyle} />
          <a href="https://www.instagram.com/ceci_duif_art" target="_blank" rel="noopener noreferrer" >@ceci_duif_art</a>
          <br /><br />
          <FaWhatsapp style={iconStyle} />
          <a href="https://wa.me/3547842578" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <br />
          <br />
          <MdPermPhoneMsg style={iconStyle} />
          +354-7842578
          <br /><br />
          <CiMail style={iconStyle} />
          <a href="mailto:ceciliaduif@gmail.com" target="_blank" rel="noopener noreferrer">ceciliaduif@gmail.com</a>
          <br /><br />
       
       

      </span>
        <img className="img-contact" alt="img" src={IMG} width={500} />
</div>
    
    );
  };
