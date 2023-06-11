import { faPenToSquare, faCircleInfo, faList, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const Presentation = () => {

    const navigate = useNavigate();

  return (
    <section className='presentation'>
        <div className='pres-info'>
            <div className='pres-info-container'>
                <FontAwesomeIcon className='pres-icon' icon={faPenToSquare} />
                <p>
                    Lista todos los productos y filtra por nombre y categoría.
                </p>
            </div>
            <div className='pres-info-container'>
                <FontAwesomeIcon className='pres-icon' icon={faList} />
                <p>
                    Crea, actualiza y elimina productos.
                </p>
            </div>
            <div className='pres-info-container'>
                <FontAwesomeIcon className='pres-icon' icon={faCircleInfo} />
                <p>
                    Visualiza la información de un solo producto.
                </p>
            </div>
            <div className='pres-info-container'>
                <FontAwesomeIcon id='invoice' className='pres-icon' icon={faFileInvoice} />
                <p>
                    Genera facturas en los detalles específicos del producto.
                </p>
            </div>
        </div>
        
        <div className='pres-button-container'>
            <div className='pres-button' onClick={(e) => {
                e.preventDefault();
                navigate('/products');
            }}>
                <div className='btn-icon-container'>
                    <FontAwesomeIcon className='pres-icon' icon={faList} />
                </div>
                <div className='pres-btn-text'>
                    <p>
                        Detalles de productos
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Presentation
