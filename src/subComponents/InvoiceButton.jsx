
const InvoiceButton = ({ setHidde }) => {

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
