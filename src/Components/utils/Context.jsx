import { createContext, useContext, useReducer, useState } from "react";



export const initialState = {theme: "", data: []}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {...state, data: [...state.data, action.payload]}   
    default:
      throw new Error()
  }
}

export const ContextGlobal = createContext(undefined);


export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  

  return (
    <ContextGlobal.Provider value={{
      state, dispatch
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