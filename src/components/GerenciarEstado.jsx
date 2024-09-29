import { createContext, useState } from "react";

const AppContext = createContext();

const ThemeProvider = ({children})=> {

    const [NomePessoa, setNomePessoa] = useState('');
    

    return(
      <AppContext.Provider value={{NomePessoa, setNomePessoa}}>
        {children}  
      </AppContext.Provider>
    );
}

export default ThemeProvider;