import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

 const {changeTheme, tema} = useContextGlobal()


  return (
  
    <header className={tema ? "header" : "header-dark dark"}>

      <h2>DH Odonto</h2>

    <nav>


      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to='/'> <h4>Home</h4> </Link>
      <Link to='/Contact'> <h4>Contact</h4> </Link>
      <Link to='/Favs'> <h4>Favs</h4> </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={changeTheme} className='btn-theme'>
          <span className={tema ? 'sun' : 'sun inactive'}>
          <i class="bi bi-brightness-high-fill"></i>
          </span>
          <span className={tema ? 'moon inactive' : "moon"}>
          <i class="bi bi-moon-stars"></i>
          </span>
        </button>

    </nav>

    </header>
  )
}

export default Navbar