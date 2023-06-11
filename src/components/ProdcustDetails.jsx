import React, { useEffect, useRef, useState } from 'react';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateForm from './CreateForm';
import axios from '../api/axios';

const ProdcustDetails = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [hidde, setHidde] = useState(true);

    const getAllProducts = () => {
        axios.get('/ProductAll')
            .then(res => {setAllProducts(res.data)})
            .catch(err => {
                console.log(err.response.status)
                if(!err?.response){
                    setErrorMsg('Sin respuesta del servidor')
                } else if(err.response.status === 404) {
                    setErrorMsg('La ruta no ha sido encontrada');
                } else {
                    setErrorMsg('Solicitud fallida.')
                }
            });
    }

    const openCreate = (e) => {
        e.preventDefault();
        setHidde(false);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        errorMsg !== '' ? alert(errorMsg) : null;
    }, [errorMsg]);

  return (
<section >
    <button className='btn' onClick={(e) => openCreate(e)}>Crear</button>
    <div className='table-container'>
    <table>
        <thead>
            <tr className='table-head'>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            {allProducts && allProducts.map(product => 
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td><button className='btn btn-sm'>{<FontAwesomeIcon icon={faPenToSquare} />}</button></td>
                <td><button className='btn btn-sm'>{<FontAwesomeIcon icon={faTrash} />}</button></td>
            </tr>)}
            <br />
        </tbody>
    </table>
    </div>
    <CreateForm hidde={hidde} setHidde={setHidde} setErrorMsg={setErrorMsg} />
</section>
  )
}

export default ProdcustDetails
