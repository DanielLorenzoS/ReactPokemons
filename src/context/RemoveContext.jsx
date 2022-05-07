import { createContext, useState } from "react";

const RemoveContext = createContext();
let removeId = "";

const RemoveDataProvider = ({children}) => {

    const [idRemove, setIdRemove] = useState(removeId);
    
    const dataToRemove = { idRemove, setIdRemove }
    return (
        <RemoveContext.Provider value={dataToRemove}>{children}</RemoveContext.Provider>
    )
}

export {RemoveDataProvider};
export default RemoveContext;