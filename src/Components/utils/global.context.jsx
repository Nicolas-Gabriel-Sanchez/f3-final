import { createContext, useReducer, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

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

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // const [globalState, setGlobalState] = useState(initialState)

  // const [state, dispatch] = useReducer(usersReducer, initialState)

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
