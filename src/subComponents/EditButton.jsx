// import CrudContext from "../context/CrudProvider";
import useData from "../hooks/useData";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";

const EditButton = ({ children, hidde, setHidde, setToEdit, productId }) => {

    const [product, getProduct] = useProduct();
    const { setItem } = useData();
    
    const openForm = (e) => {
        e.preventDefault();
        setHidde(false);
        setToEdit(true);
        setItem(product);
    }
    
    useEffect(() => {
        getProduct(productId);
    }, [hidde]);
    
    
  return (
      <button className='btn btn-sm' onClick={(e) => openForm(e)}>{children}</button>
  )
}

export default EditButton
