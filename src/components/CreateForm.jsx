import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateForm = ({ hidde, setHidde, setErrorMsg }) => {

const { register, handleSubmit, resetField } = useForm();

const styles = {
  display: hidde ? 'none' : 'flex'
}

const handleCreate = async (data) => {
  try {
        const result = await axios.post(
          '/Product',
          {
              name: data.name,
              description: data.description,
              category: data.category,
              stock: Number(data.stock),
              price: Number(data.price)
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );

      resetField("name");
      resetField("category");
      resetField("price");
      resetField("stock");
      resetField("description");
      setHidde(true);

      console.log(result);
  } catch (err) {
    console.log(err);
      if(!err?.response){
          setErrorMsg('Sin respuesta del servidor')
      } else if(err.response.status === 404) {
          setErrorMsg('La ruta no ha sido encontrada');
      } else {
          setErrorMsg('Solicitud fallida.')
      }
  }
}

  return (
    <div className='form' style={styles}>
        <form onSubmit={handleSubmit((data) => {
          handleCreate(data);
        })}>
            <label htmlFor='name' >Nombre</label>
            <input
              className='input'
              type='text'
              id='name'
              name='name'
              {...register('name')}
            />

            <label htmlFor='category' >Categoría</label>
            <input
              className='input'
              type='text'
              id='category'
              name='category'
              {...register('category')}
            />

            <div className='numbers-container'>
              <div className='number-container'>
                <label htmlFor='price' >Precio</label>
                <input
                  className='input'
                  type='number'
                  id='price'
                  name='price'
                  {...register('price')}
                />
              </div>

              <div className='number-container'>
                <label htmlFor='price' >Stock</label>
                <input
                  className='input'
                  type='number'
                  id='stock'
                  name='stock'
                  {...register('stock')}
                />
              </div>
            </div>

            <label htmlFor='description' >Descripción</label>
            <textarea
              className='input'
              id='description'
              name='description'
              {...register('description')}
            ></textarea>

            <button type="submit" className='btn btn-form'>Enviar</button>
            
            <span className='close-form' onClick={(e) => {
              e.preventDefault();
              setHidde(true); 
            }} >
            {<FontAwesomeIcon icon={faXmark} style={{ width: '90px' }} />}
            </span>
        </form>
    </div>
  )
}

export default CreateForm
