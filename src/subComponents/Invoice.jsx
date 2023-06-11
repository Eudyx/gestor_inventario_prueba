import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invoice = ({ quantity, product, hidde, setHidde }) => {

    const styles = {
        display: hidde ? 'none' : 'flex'
      }

      const price = Number(product.price) * Number(quantity);
      const itbis = price * 0.18;
      const price1 = price - itbis;

  return (
    <div className='invoice-section' style={styles}>
        <div className='invoice-container'>
            <p><span className='titles'>Producto:&nbsp;&nbsp;</span>{product.name}</p>
            <p><span className='titles'>Categoría:&nbsp;&nbsp;</span>{product.category}</p>
            <p><span className='titles'>Cantidad:&nbsp;&nbsp;</span>{quantity}</p>
            <br />
            <table >
                <tbody>
                    <tr>
                    <td>Precio:</td>
                    <td>{price1.toString()}</td>
                    </tr>
                    <tr>
                    <td>ITBIS:</td>
                    <td>{itbis.toString()}</td>
                    </tr>
                    <tr>
                    <td>Total:</td>
                    <td>{price.toString()}</td>
                    </tr>
                </tbody>
            </table>
            <span className='close-form close-invoice' onClick={(e) => {
              e.preventDefault();
              setHidde(true);
            }} >
            {<FontAwesomeIcon icon={faXmark} style={{ width: '90px' }} />}
            </span>
        </div>
    </div>
  )
}

export default Invoice
