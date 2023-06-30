import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  // const [nombre, setNombre] = useState("")
  // const [email, setEmail] = useState("")
  // setNombre={setNombre} setEmail={setEmail}

  return (

    <div className='contacto'>

      <h2>¡Contactate con nosotros!</h2>
      <p>Ingresa los datos solicitados:</p>

      <Form />

    </div>

    
  )
}

export default Contact