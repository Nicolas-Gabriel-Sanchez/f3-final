import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [medico, setMedico] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url).then((response) => response.json())
    .then((data) => {
        setMedico(data)
        console.log(data);
    })
  }, [])

  // const addFav = (medico) =>{
  //   localStorage.setItem("medicosFavoritos", )

  // }

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {medico.map(medico => <Card key={medico.id} name={medico.name} username={medico.username} id={medico.id}/> )}
      </div>
    </main>
  )
}

export default Home