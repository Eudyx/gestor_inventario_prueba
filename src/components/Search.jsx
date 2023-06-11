import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const Search = ({ allProducts, setFilteredProducts }) => {

  const serachRef = useRef();

    const handleFilter = (e) => {
        e.preventDefault();
        let searchText = serachRef.current.value.trim().toLowerCase();
        setFilteredProducts(allProducts.filter(product => product.name.trim().toLowerCase().includes(searchText) || product.category.trim().toLowerCase().includes(searchText)));
      }

  return (
    <form className='serach-container'>
          <button className='btn btn-search'  onClick={(e) => handleFilter(e) }>{<FontAwesomeIcon style={{ fontSize: '24px' }} icon={faSearch} />}</button>
          <input ref={serachRef} type='text' className='input input-search' />
    </form>
  )
}

export default Search
