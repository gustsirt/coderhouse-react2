import React from "react";
import { useLocation } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram, BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function HyFJoubert(props) {
  const paginas = [
    {
      src: "/",
      h1: "Tienda Joubert"
    },
    {
      src: "/Productos",
      h1: "Productos"
    },
    {
      src: "/Colores",
      h1: "Auxiliar Colores"
    }
  ];

  let location = useLocation();
  const currentPagina = paginas.find((pagina) => pagina.src === location.pathname);
  
  return (
    <>
      <header className="header">

        <h1>{currentPagina ? currentPagina.h1 : ""}</h1>

        <div className="navB">
          <nav className="nav">
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/Productos">Productos</NavLink></li>
              <li><NavLink to="/Marca/EsteeLauder">Estee Lauder</NavLink></li>
              <li><NavLink to="/Marca/Prune">Prune</NavLink></li>
              <li><NavLink to="/Marca/Ernesto">Ernesto</NavLink></li>
              <li><NavLink to="/Colores">Colores</NavLink></li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </header>
      <section className="cuerpo">{props.children}</section>
      <footer className="footer">
        <p className="title">Tienda Joubert</p>
        <p className="descrip"></p>
        <div className="social-links">
          <a href="https://wa.me/5493541613185?text=Hola.%20Me%20gustaría%20contactarme%20contigo" target="_blank" rel="noreferrer">
            <BiLogoWhatsapp/>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BiLogoFacebook/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BiLogoInstagram/>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <BiLogoLinkedin/>
          </a>
          <a href="mailto:gustavo.sirtori@gmail.com" target="_blank" rel="noreferrer">
            <BiLogoGmail/>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()+" - "}
          <strong>  Sirtori Gustavo</strong>. Todos los derechos
          reservados
        </div>
      </footer>
    </>
  );
}
