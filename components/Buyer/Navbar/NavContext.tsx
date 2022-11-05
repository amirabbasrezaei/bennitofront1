import { createContext, FC, ReactElement, useContext, useState } from "react";
import navPages from "./navPages";

const NavContext = createContext({
  page:'',
  setpage: (e:string) => {}
})

type PropsType = {
    children?: JSX.Element;
  };

export const NavContextWrapper : FC<PropsType> = ({children}) => {
    const [state, setState]  = useState(navPages[0].name)
    return (
        <NavContext.Provider value={{
          page:state,
          setpage: (e:string) => setState(e)
        }}>
          {children}
        </NavContext.Provider>
    )
}

export const useNavContext = () => {
  return useContext(NavContext)
}




