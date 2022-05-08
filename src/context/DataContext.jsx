import { createContext, useState } from "react";

const DataContext = createContext();
let initialId = [];

const DataProvider = ({children}) => {

    const [idNumber, setIdNumber] = useState(initialId);
    
    const data = { idNumber, setIdNumber }
    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export {DataProvider};
export default DataContext;