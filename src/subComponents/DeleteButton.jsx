import React from 'react'
import axios from '../api/axios';

const DeleteButton = ({ children, productId, deleted, setDeleted }) => {
    
    // Fetch to delte a product
    const deleteProduct = (e) => {
        e.preventDefault();
        setDeleted(!deleted);
        axios.delete(`/ProductId/?id=${productId}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                if(!err?.response){
                    setErrorMsg('Sin respuesta del servidor')
                } else if(err.response.status === 404) {
                    setErrorMsg('La ruta no ha sido encontrada');
                } else {
                    setErrorMsg('Solicitud fallida.')
                }
            });
    }

  return (
    <button className='btn btn-sm' onClick={(e) => deleteProduct(e)}>{children}</button>
  )
}

export default DeleteButton
