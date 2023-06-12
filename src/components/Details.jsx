import React, { useEffect, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { useParams } from 'react-router-dom';
import InvoiceButton from '../subComponents/InvoiceButton';
import Invoice from '../subComponents/Invoice';

const Details = () => {

    const [product, getProduct] = useProduct({});
    const [quantity, setQuantity] = useState(1);
    const [hidde, setHidde] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id); //getting a product
    },[]);

  return (
    <section className='details-section'>
        <div className='details-container'>
            {product && 
            <>
            {/* showing data */}
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
            {/* showing data */}
            </>
            }
        </div>
        <br />
        <p style={{ textAlign: 'center', fontWeight: '500' }}>Elija una cantidad</p>
        <br />
        <div className='inputs-details-container'>
            {/* setting a quantity to generate an invoice */}
            <input
                placeholder='Cantidad: ej 10'
                className='input invoice-input'
                type='number' value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                pattern="^[0-9]+"
            />
            {/* setting a quantity to generate an invoice */}

            {/* button to show the invocie */}
            <InvoiceButton setHidde={setHidde} quantity={quantity} />
            {/* button to show the invocie */}
        </div>
        {/* invoice */}
        <Invoice quantity={quantity} product={product} hidde={hidde} setHidde={setHidde} />
        {/* invoice */}
    </section>
  )
}

export default Details
