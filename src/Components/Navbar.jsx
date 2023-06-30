import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const {dispatch} = useContext(ContextGlobal)

  // const changeTheme = () => {
  //   dispatch({type:"CHANGE_THEME"})
  // }

  const [tema, setTema] = useState(true)

  const cambiarTema = () => {
    setTema(!tema)
  }


  return (
  
    <header>

      <h2>DH Odonto</h2>

    <nav>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to='/'> <h4>Home</h4> </Link>
      <Link to='/Contact'> <h4>Contact</h4> </Link>
      <Link to='/Favs'> <h4>Favs</h4> </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={cambiarTema} className='btn-theme'>
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