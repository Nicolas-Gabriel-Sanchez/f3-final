import React from 'react'
import logo from "../images/DH.png"
import logo1 from "../images/ico-facebook.png"
import logo2 from "../images/ico-instagram.png"
import logo3 from "../images/ico-tiktok.png"
import logo4 from "../images/ico-whatsapp.png"
import { useContextGlobal } from '../Components/utils/Context'

const Footer = () => {

  const {tema} = useContextGlobal()


  return (

    <footer className={tema ? "footer" : "footer dark"}>

      <div className='footer-red'>
        <p>Los mejores dentistas</p>

      </div>
      
      <div className='footer-info'>

        <div className='footer-logo'>
        <p>Powered by</p>
        <img src={logo} alt='DH-logo' />
        </div>

        <div className='footer-redes'>

        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-tiktok"></i>
        <i class="bi bi-whatsapp"></i>

        </div>

         
      </div>
    

    </footer>

  )
}

export default Footer
