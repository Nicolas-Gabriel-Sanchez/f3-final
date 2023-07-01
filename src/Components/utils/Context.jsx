import { createContext, useContext, useReducer, useState } from "react";

const favoritos = JSON.parse(localStorage.getItem("favorito"))
const temaGuardo = (localStorage.getItem("temaGuardado"))

export const initialState = {theme: temaGuardo ? temaGuardo : "light", data: favoritos ? favoritos : []}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {...state, data: [...state.data, action.payload]}
    case "CHANGE_THEME":
      return {...state, theme: state.theme == "light" ? "dark" : "light"}   
    default:
      throw new Error()
  }
}

export const ContextGlobal = createContext(undefined);


export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  const [tema, setTema] = useState(state.theme == "light")

  const changeTheme = () =>{
    dispatch({type: "CHANGE_THEME"})
    setTema(!tema)
    localStorage.setItem("temaGuardado", state.theme == "light" ? "dark" : "light")
    
  }

  return (
    <ContextGlobal.Provider value={{
      state, dispatch, changeTheme, tema
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useContextGlobal = () => useContext(ContextGlobal)

export default Context;


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // const [globalState, setGlobalState] = useState(initialState)
  // const [state, dispatch] = useReducer(usersReducer, initialState)

// const usersReducer = (state=initialState,action) =>{
//   switch (action.type) {
//     case "SAVE_USERS":
//       return {...state,data:action.data}
      
//     case "CHANGE_THEME":
//       console.log(state);
//       return {...state,theme:state.theme == "light" ? "dark": "light"}
  
//     default:
//       break;
//   }

// }