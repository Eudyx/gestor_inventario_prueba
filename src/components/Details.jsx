import React, { useEffect, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { useParams } from 'react-router-dom';
import InvoiceButton from '../subComponents/InvoiceButton';
import Invoice from '../subComponents/Invoice';

const Details = () => {

    const [product, getProduct] = useProduct({});
    const [quantity, setQuantity] = useState(0);
    const [hidde, setHidde] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id);
    },[]);

    useEffect(() => {
        console.log(product);
    },[product]);
  return (
    <section className='details-section'>
        <div className='details-container'>
            {product && 
            <>
                <h2 className='p-name'>{product.name}</h2>
                <p className='detail-text'><span className='titles'>Categoría:&nbsp;&nbsp;</span>{product.category}</p>
                <p className='detail-text'><span className='titles'>Stock:&nbsp;&nbsp;</span>{product.stock}</p>
                <h2 className='titles detail-text'>Descripcción</h2>
                <p className='description-text'>
                    {product.description}
                </p>
                <div className='price-container'>
                    <p className='detail-text'><span className='titles'>Precio:&nbsp;&nbsp;</span>${product.price}</p>
                </div>
            </>
            }
        </div>
        <br />
        <div className='inputs-details-container'>
            <input
                placeholder='Cantidad: ej 10'
                className='input invoice-input'
                type='number' value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                pattern="^[0-9]+"
            />
            <InvoiceButton setHidde={setHidde} />
        </div>
        <Invoice quantity={quantity} product={product} hidde={hidde} setHidde={setHidde} />
    </section>
  )
}

export default Details
