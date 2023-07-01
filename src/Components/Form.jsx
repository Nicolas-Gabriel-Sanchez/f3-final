import React, { useState } from "react";
import { useContextGlobal } from '../Components/utils/Context'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const {tema} = useContextGlobal()

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
 

  const handleSubmit = (e) => {

    e.preventDefault()

    if (nombre.length > 5 && email.includes("@") ) {
      setShow(true)
      setError(false)
    } else{
      setError(true)
      setShow(false)
    }

  }


  return (

      <div>

        <div className="formulario">

        <form onSubmit={handleSubmit}>

          <label> Ingresa tu nombre completo </label>
          <input type="text" onChange={ (e) => setNombre(e.target.value)} />

          <label> Ingresa tu Email </label>
          <input type="text" onChange={ (e) => setEmail(e.target.value)} />

          <button> Enviar </button>

        </form>

        </div>

        {error && <p style={{color:"red"}}>¡La Información es incorrecta, por favor revisela!</p>}
        {show && <p style={{color:"green"}}>Información enviada con éxito!</p>}

      </div>

  );
};

export default Form;
