import { createContext, useState } from "react";

const CrudContext = createContext({});

export const CrudProvider = ({ children }) => {
    const [item, setItem] = useState({});

    return(
        <CrudContext.Provider value={{ item, setItem }}>
            {children}
        </CrudContext.Provider>
    )
}

export default CrudContext;