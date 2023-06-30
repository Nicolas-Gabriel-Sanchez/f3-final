import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {id} = useParams()
  console.log(id);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  const [medico, setMedico] = useState({})

  useEffect(() => {
    fetch(url).then((response) => response.json())
    .then((data) => {
        setMedico(data)
        console.log(data);
    })
  }, [])

  return (


    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{medico.name}</td>
          <td>{medico.email}</td>
          <td>{medico.phone}</td>
          <td>{medico.website}</td>
        </tr>
     
      </table>

    </>
  )
}

export default Detail