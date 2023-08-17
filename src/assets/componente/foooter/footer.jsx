import React from 'react'
import '../../../EstilosGenerales.css'
import '../Header.css'
import './footer.css'
import LogoPortal from '../logoprincipal.png'
const Footer = () => {
    return (
        <div className='footer blanco'>
            <div className="col50">
                <img src={LogoPortal} />
                <div className="col100 flex">
                    <div className="col50">

                        <ul className='lista_colum'>
                            <li> Categorias</li>
                            <li>Salones</li>
                            <li>Imagen Personal</li>
                            <li>Contactos</li>
                        </ul>
                    </div>

                    <div className="col50">

                        <ul className='lista_colum'>
                            <li>Aviso Legales</li>
                            <li>Terminos y Condiciones</li>
                            <li>Trabaja con Nosotros</li>
                            <li>Anuncia en el Portal</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Footer   