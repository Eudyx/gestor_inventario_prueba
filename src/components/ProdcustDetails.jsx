import React, { useEffect, useState } from 'react';
import { faPenToSquare, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateForm from './CreateForm';
import EditButton from '../subComponents/EditButton';
import DeleteButton from '../subComponents/DeleteButton';
import axios from '../api/axios';
import Search from './Search';
import { Link } from 'react-router-dom';

const ProdcustDetails = ({ hidde, setHidde }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState();
    const [data, setData] = useState([]); // for storing the data when is filtered or not
    const [errorMsg, setErrorMsg] = useState('');
    const [toEdit, setToEdit] = useState(false); //to detect if we are in edit mode
    const [deleted, setDeleted] = useState(false);

    const getAllProducts = () => {
        axios.get('/ProductAll')
        .then(res => {setAllProducts(res.data)})
        .catch(err => {
            if(!err?.response){
                setErrorMsg('Sin respuesta del servidor')
            } else if(err.response.status === 404) {
                setErrorMsg('La ruta no ha sido encontrada');
            } else {
                setErrorMsg('Solicitud fallida.')
            }
        });
    }       
    
    useEffect(() => {
        getAllProducts(); //getting all products
    }, [hidde, deleted]);
    
    useEffect(() => {
        // Detecting if the data is filtered or not
        !filteredProducts?.length ? 
        setData(allProducts) : setData(filteredProducts); 
    }, [allProducts, data, filteredProducts]);

    useEffect(() => {
        //displaying error massage
        errorMsg !== '' ? alert(errorMsg) : null;
    }, [errorMsg]);

  return (
<section >
    {/* Component to filter the data */}
    <Search
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
    />
    {/* Component to filter the data */}
    
    <br/>
    {/* Displaying the products */}
    <div className='table-container'>
    <table>
        <thead>
            <tr className='table-head'>
            <th>info</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map(product => 
            <tr key={product.id}>
                {/* link to the details section */}
                <td><Link to={`/details/${product.id}`} className='router-link' ><FontAwesomeIcon className='info-icon' icon={faCircleInfo} /></Link></td>
                {/* link to the details section */}

                {/* Data*/}
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                {/* Data*/}
                {/* Edit and delete button */}
                <td>
                    <EditButton 
                        hidde={hidde}
                        setHidde={setHidde}
                        setToEdit={setToEdit}
                        productId={product.id}
                        >
                        {<FontAwesomeIcon icon={faPenToSquare} />}
                    </EditButton>
                </td>
                <td><DeleteButton productId={product.id} deleted={deleted} setDeleted={setDeleted} >{<FontAwesomeIcon icon={faTrash} />}</DeleteButton></td>
                {/* Edit and delete button */}
            </tr>)}
        </tbody>
    </table>
    </div>
    {/* Form to create and edit a product */}
    <CreateForm
        hidde={hidde}
        setHidde={setHidde}
        toEdit={toEdit}
        setToEdit={setToEdit}
        setErrorMsg={setErrorMsg}
    />
    {/* Form to create and edit a product */}
</section>
  )
}

export default ProdcustDetails
