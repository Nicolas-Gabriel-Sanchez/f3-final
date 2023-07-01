import React from "react";
import doctor from "../images/doctor.jpg"
import { Link } from "react-router-dom";
import {useContextGlobal} from "./utils/Context.jsx"


const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContextGlobal()

  const addFav = (id)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const findDentist = state.data.find( dentist => dentist.id === id)

    if (!findDentist) {
      dispatch({type:"ADD_FAV", payload: {name, username, id}})
      localStorage.setItem("favorito", JSON.stringify(state.data))
    } else {
        alert("¡Ya está agregando!")
    }
  }

  return (

    <div className="card">

        {/* En cada card deberan mostrar en name - username y el id */}

      <Link to={"/Detail/" + id } className="card-link">
        <img src={doctor} alt="" />
        <div>{name}</div>
        <div>{username}</div>
        <div>ID:  {id}</div>
      </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <button onClick={() => addFav(id)} className="favButton">Add fav</button>
        

    </div>
  );
};

export default Card
