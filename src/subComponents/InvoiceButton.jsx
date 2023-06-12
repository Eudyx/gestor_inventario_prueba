
const InvoiceButton = ({ setHidde, quantity }) => {

  return (
    <button className='btn' onClick={(e) => {
        e.preventDefault();
        setHidde(false);
        }}>
      Factura
    </button>
  )
}

export default InvoiceButton
