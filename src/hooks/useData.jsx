import { useContext } from "react";
import CrudContext from "../context/crudProvider";

const useData = () => {
    return useContext(CrudContext);
}

export default useData;