import React from 'react'
import './Page.css';

function Page() {
  return (
    <>
        <footer>
            <div className="footer-all navegation">
            <div className="Contacto">
                <div className="Colum1">
                <h1>Encuentranos 📲</h1>
                <div className="row">
                    <a href="#" target="blank"
                        ><i className="fas fa-map-marker-alt"></i></a>
                    <label>Google map</label>
                    </div>
                </div>
                <div className="Colum2">
                <h1>Redes Sociales 👀</h1>
                <div className="row">
                    <a href="#" target="blank"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <label>Sigenos En Facebook</label>
                </div>
                <div className="row">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <label>Sigenos En Twitter</label>
                </div>
                <div className="row">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <label>Sigenos En Instagram</label>
                </div>
                <div className="row">
                    <a href="#" target="blank"
                    ><i className="fab fa-telegram-plane"></i
                    ></a>
                    <label>Sigenos En Telegram</label>
                </div>
                </div>
                <div className="Colum3">
                <h1>Informacion de Contacto 📧</h1>
                <div className="row">
                    <i className="far fa-envelope"></i>
                    <label>jordancaicedo64@gmail.com</label>
                </div>
                </div>
            </div>
            </div>
            <div className="Autor">
            <div className="Autor-centrar">
                <div className="copy">
                © 2021 Copyright - Todos Los Derechos Reservados
                </div>
                <ul className="polityc">
                    <li><a href="#">Soporte Tecnico</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Politicas y condiciones</a></li>
                </ul>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Page;